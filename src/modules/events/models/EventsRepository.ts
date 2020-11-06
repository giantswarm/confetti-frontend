import { action, computed, makeObservable, observable, runInAction } from "mobx";

import { Repository } from "@/core/models/Repository";
import { RepositoryValue } from "@/core/models/RepositoryValue";
import { PayloadHandler } from "@/core/networking/PayloadHandler";
import { EventsService } from "@/modules/events/networking/EventsService";
import { UsersRepository } from "@/modules/users/models/UsersRepository";

import { DefaultEventPayloadHandler } from "../networking/handlers/types/default/DefaultEventPayloadHandler";
import { OnsiteEventPayloadHandler } from "../networking/handlers/types/onsite/OnsitePayloadHandler";
import { EventsWatcherPayloads } from "../networking/payloads/watcher/watcher";
import { RemoteEvent } from "./types/eventTypes";
import { OnsiteEvent } from "./types/onsite/OnsiteEvent";
import { OnsiteEventRoom } from "./types/onsite/OnsiteEventRoom";

type EventsMap = Map<string, RemoteEvent>;

export class EventsRepository extends Repository {
    constructor(protected readonly eventsService: EventsService, protected readonly usersRepository: UsersRepository) {
        super();

        makeObservable(this, {
            events: observable,
            activeEventID: observable,
            activeEvent: computed,
            getAll: action,
            watchEvent: action,
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

    get activeRoom(): OnsiteEventRoom | null {
        if (!this.activeOnsiteRoomID.data) return null;
        if (this.activeEvent?.eventType !== "onsite") return null;

        return this.findRoomWithID(this.activeOnsiteRoomID.data);
    }

    public async getAll(): Promise<void> {
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
    }

    public async watchEvent(eventID: string): Promise<void> {
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
    }

    public onWatcherConnect = (eventID: string): void => {
        this.activeEventID.data = eventID;
    };

    public onWatcherDisconnect = (_eventID: string): void => {
        this.activeEventID.data = null;
    };

    public onWatcherInvalidPayload = (errorMessage: string): void => {
        this.activeEventID.error = errorMessage;
    };

    public onWatcherUpdateConfiguration = (newEvent: RemoteEvent): void => {
        this.activeEventID.data = newEvent.id;
        this.events.data?.set(newEvent.id, newEvent);
    };

    public onRoomJoin = (roomID: string): void => {
        this.activeOnsiteRoomID.data = roomID;
    };

    public onRoomJoinError = (_roomID: string, errorMessage: string): void => {
        this.activeOnsiteRoomID.error = errorMessage;
    };

    public onRoomLeave = (_roomID: string): void => {
        this.activeOnsiteRoomID.data = null;
    };

    public onRoomLeaveError = (_roomID: string, errorMessage: string): void => {
        this.activeOnsiteRoomID.error = errorMessage;
    };

    public onRoomUpdateAttendeeCounter = (roomID: string, counter: number): void => {
        const room = this.findRoomWithID(roomID);
        if (!room) return;

        room.attendeeCounter = counter;
    };

    private findRoomWithID(roomID: string): OnsiteEventRoom | null {
        if (!this.activeEvent) return null;
        const room = (this.activeEvent as OnsiteEvent).rooms?.find((r) => r.id === roomID);

        return room ?? null;
    }
}
