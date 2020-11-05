import { action, makeObservable, observable, runInAction } from "mobx";

import { Repository } from "@/core/models/Repository";
import { RepositoryValue } from "@/core/models/RepositoryValue";
import { EventsService } from "@/modules/events/networking/EventsService";
import { UsersRepository } from "@/modules/users/models/UsersRepository";

import { RemoteEvent } from "./types/eventTypes";

type EventsMap = Map<string, RemoteEvent>;

export class EventsRepository extends Repository {
    constructor(protected readonly eventsService: EventsService, protected readonly usersRepository: UsersRepository) {
        super();

        makeObservable(this, {
            events: observable,
            activeEventID: observable,
            getAll: action,
            watchEvent: action,
        });
    }

    public events = new RepositoryValue<EventsMap>(null);

    public activeEventID = new RepositoryValue<string>(null);

    public async getAll(): Promise<void> {
        this.events.loading = true;
        this.events.error = "";

        try {
            const authToken = this.usersRepository.currentUser?.data?.token;
            if (!authToken) {
                runInAction(() => {
                    this.events.error = "You are not authenticated";
                });

                return;
            }

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

        try {
            const authToken = this.usersRepository.currentUser?.data?.token;
            if (!authToken) {
                runInAction(() => {
                    this.activeEventID.error = "You are not authenticated";
                });

                return;
            }

            await this.eventsService.watchEvent({
                eventID,
                authToken,
                onConnect: () => {
                    console.log("Connected");
                },
                onDisconnect: () => {
                    console.log("Disconnected");
                },
                onMessage: (payload) => {
                    console.log("Message", payload);
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
}
