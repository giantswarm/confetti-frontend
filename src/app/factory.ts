import { EventsRepository } from "@/modules/events/models/EventsRepository";
import { createEventsRepository } from "@/modules/events/models/factory";
import { createUsersRepository } from "@/modules/users/models/factory";
import { UsersRepository } from "@/modules/users/models/UsersRepository";

import { Config } from "./Config";

export interface AppRepositories {
    Users: UsersRepository;
    Events: EventsRepository;
}

export function createRepositories(config: Config) {
    return (): AppRepositories => {
        const usersRepository = createUsersRepository(config);
        const eventsRepository = createEventsRepository(config, usersRepository);

        return Object.freeze({
            Users: usersRepository,
            Events: eventsRepository,
        });
    };
}
