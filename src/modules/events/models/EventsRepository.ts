import { action, computed, makeObservable, observable, runInAction } from "mobx";

import { PersistingStrategy } from "@/core/models/PersistingStrategy";
import { Repository } from "@/core/models/Repository";
import { RepositoryValue } from "@/core/models/RepositoryValue";
import { PayloadHandler } from "@/core/networking/PayloadHandler";
import { EventsService } from "@/modules/events/networking/EventsService";
import { UsersRepository } from "@/modules/users/models/UsersRepository";

import { DefaultEventPayloadHandler } from "../networking/handlers/watcher/types/default/DefaultEventPayloadHandler";
import { OnsiteEventPayloadHandler } from "../networking/handlers/watcher/types/onsite/OnsitePayloadHandler";
import { EventsWatcherPayloads } from "../networking/payloads/watcher/watcher";
import { RemoteEvent } from "./types/eventTypes";
import { OnsiteEvent } from "./types/onsite/OnsiteEvent";
import { OnsiteEventRoom } from "./types/onsite/OnsiteEventRoom";

type EventsMap = Map<string, RemoteEvent>;

export class EventsRepository extends Repository {
    public static activeEventIDStorageKey = "activeEventID";
    public static activeOnsiteEventRoomIDStorageKey = "activeOnsiteEventRoomID";

    constructor(
        protected readonly persistingStrategy: PersistingStrategy,
        protected readonly eventsService: EventsService,
        protected readonly usersRepository: UsersRepository
    ) {
        super();

        makeObservable(this, {
            events: observable,
            activeEventID: observable,
            activeEvent: computed,
            activeOnsiteRoomID: observable,
            activeOnsiteRoom: computed,
            getAll: action,
            watchEvent: action,
            tryToRestoreActiveOnsiteRoom: action,
            onWatcherConnect: action,
            onWatcherDisconnect: action,
            onWatcherUpdateConfiguration: action,
            onRoomJoin: action,
            onRoomJoinError: action,
            onRoomLeave: action,
            onRoomLeaveError: action,
            onRoomUpdateAttendeeCounter: action,
        });
    }

    public events = new RepositoryValue<EventsMap>(null);
    public activeEventID = new RepositoryValue<string>(null);
    public activeOnsiteRoomID = new RepositoryValue<string>(null);

    get activeEvent(): RemoteEvent | null {
        if (!this.activeEventID.data) return null;

        return this.events.data?.get(this.activeEventID.data) ?? null;
    }

    get activeOnsiteRoom(): OnsiteEventRoom | null {
        if (!this.activeOnsiteRoomID.data) return null;
        if (this.activeEvent?.eventType !== "onsite") return null;

        return this.findRoomWithID(this.activeOnsiteRoomID.data);
    }

    public getAll = async (): Promise<void> => {
        if (this.events.data) return;

        this.events.loading = true;
        this.events.error = "";

        const authToken = this.usersRepository.currentUser?.data?.token;
        if (!authToken) {
            this.events.error = "You are not authenticated";

            return;
        }

        try {
            const events = await this.eventsService.getAll(authToken);
            const eventsMap = events.reduce((agg: EventsMap, currValue: RemoteEvent) => {
                agg.set(currValue.id, currValue);

                return agg;
            }, observable.map());
            runInAction(() => {
                this.events.data = eventsMap;
            });
        } catch (err: unknown) {
            runInAction(() => {
                this.events.error = (err as Error).message;
            });
        } finally {
            runInAction(() => {
                this.events.loading = false;
            });
        }
    };

    public watchEvent = async (eventID: string): Promise<void> => {
        if (this.activeEventID.data === eventID) return;

        this.activeEventID.loading = true;
        this.activeEventID.error = "";

        const authToken = this.usersRepository.currentUser?.data?.token;
        if (!authToken) {
            this.activeEventID.error = "You are not authenticated";

            return;
        }

        const messagePayloadHandlers: PayloadHandler<EventsWatcherPayloads>[] = [
            new DefaultEventPayloadHandler({
                onInvalidPayload: this.onWatcherInvalidPayload,
                onUpdateConfiguration: this.onWatcherUpdateConfiguration,
            }),
            new OnsiteEventPayloadHandler({
                onRoomJoin: this.onRoomJoin,
                onRoomJoinError: this.onRoomJoinError,
                onRoomLeave: this.onRoomLeave,
                onRoomLeaveError: this.onRoomLeaveError,
                onRoomUpdateAttendeeCounter: this.onRoomUpdateAttendeeCounter,
            }),
        ];

        try {
            if (!this.events.data?.has(eventID)) {
                throw new Error("This event does not exist anymore.");
            }

            await this.eventsService.watchEvent({
                eventID,
                authToken,
                messagePayloadHandlers: messagePayloadHandlers,
                onConnect: () => {
                    this.onWatcherConnect(eventID);
                },
                onDisconnect: () => {
                    this.onWatcherDisconnect(eventID);
                },
            });
        } catch (err: unknown) {
            runInAction(() => {
                this.activeEventID.error = (err as Error).message;
            });
        } finally {
            runInAction(() => {
                this.activeEventID.loading = false;
            });
        }
    };

    public stopWatchingEvent = (eventID: string): void => {
        this.eventsService.stopWatchingEvent(eventID);
        if (this.activeOnsiteRoom) this.activeOnsiteRoom.attendeeCounter--;
        this.activeEventID.data = null;
        this.persistingStrategy.delete(EventsRepository.activeEventIDStorageKey);
    };

    public joinOnsiteRoom = async (eventID: string, onsiteRoomID: string): Promise<void> => {
        try {
            await this.eventsService.joinOnsiteRoom(eventID, onsiteRoomID);
        } catch (err) {
            runInAction(() => {
                this.activeOnsiteRoomID.error = err;
            });
        }
    };

    public leaveOnsiteRoom = async (eventID: string, onsiteRoomID: string): Promise<void> => {
        try {
            await this.eventsService.leaveOnsiteRoom(eventID, onsiteRoomID);
        } catch (err) {
            runInAction(() => {
                this.activeOnsiteRoomID.error = err;
            });
        }
    };

    public tryToRestoreActiveOnsiteRoom = async (): Promise<void> => {
        this.activeOnsiteRoomID.loading = true;

        try {
            const existingOnsiteRoomID = this.persistingStrategy.restore<string>(
                EventsRepository.activeOnsiteEventRoomIDStorageKey
            );
            if (!existingOnsiteRoomID) return Promise.resolve();

            const desiredRoom = this.findRoomWithID(existingOnsiteRoomID);
            if (!desiredRoom) {
                throw new Error(`Onsite event room with ID ${existingOnsiteRoomID} does not exist anymore.`);
            }

            await this.joinOnsiteRoom(this.activeEventID.data!, existingOnsiteRoomID);
        } catch (err) {
            this.persistingStrategy.delete(EventsRepository.activeOnsiteEventRoomIDStorageKey);
        } finally {
            runInAction(() => {
                this.activeOnsiteRoomID.loading = false;
            });
        }

        return Promise.resolve();
    };

    public onWatcherConnect = (eventID: string): void => {
        this.activeEventID.data = eventID;
        this.persistingStrategy.persist(EventsRepository.activeEventIDStorageKey, eventID);
    };

    public onWatcherDisconnect = (_eventID: string): void => {};

    public onWatcherInvalidPayload = (errorMessage: string): void => {
        this.activeEventID.error = errorMessage;
    };

    public onWatcherUpdateConfiguration = (newEvent: RemoteEvent): void => {
        this.activeEventID.data = newEvent.id;
        this.events.data?.set(newEvent.id, newEvent);

        this.tryToRestoreActiveOnsiteRoom();
    };

    public onRoomJoin = (roomID: string): void => {
        this.activeOnsiteRoomID.data = roomID;
        this.persistingStrategy.persist(EventsRepository.activeOnsiteEventRoomIDStorageKey, roomID);
    };

    public onRoomJoinError = (_roomID: string, errorMessage: string): void => {
        this.activeOnsiteRoomID.error = errorMessage;
        this.persistingStrategy.delete(EventsRepository.activeOnsiteEventRoomIDStorageKey);
    };

    public onRoomLeave = (_roomID: string): void => {
        this.activeOnsiteRoomID.data = null;
        this.persistingStrategy.delete(EventsRepository.activeOnsiteEventRoomIDStorageKey);
    };

    public onRoomLeaveError = (_roomID: string, errorMessage: string): void => {
        this.activeOnsiteRoomID.error = errorMessage;
        this.persistingStrategy.delete(EventsRepository.activeOnsiteEventRoomIDStorageKey);
    };

    public onRoomUpdateAttendeeCounter = (roomID: string, counter: number): void => {
        const room = this.findRoomWithID(roomID);
        if (!room) return;

        room.attendeeCounter = counter;
    };

    private findRoomWithID(roomID: string): OnsiteEventRoom | null {
        if (this.activeEvent instanceof OnsiteEvent) {
            return this.activeEvent.rooms.find((r) => r.id === roomID) ?? null;
        }

        return null;
    }
}
