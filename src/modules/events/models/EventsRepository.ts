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
            getAll: action,
        });
    }

    public events: RepositoryValue<EventsMap> = new RepositoryValue<EventsMap>(null);

    public async getAll(): Promise<void> {
        this.events.loading = true;

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
}
