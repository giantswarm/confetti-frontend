import { EventsRepository } from "@/modules/events/models/EventsRepository";
import { createEventsRepository } from "@/modules/events/models/factory";
import { createUsersRepository } from "@/modules/users/models/factory";
import { UsersRepository } from "@/modules/users/models/UsersRepository";

export interface AppRepositories {
    Users: UsersRepository;
    Events: EventsRepository;
}

export function createRepositories(): AppRepositories {
    const usersRepository = createUsersRepository();
    const eventsRepository = createEventsRepository(usersRepository);

    return Object.freeze({
        Users: usersRepository,
        Events: eventsRepository,
    });
}
