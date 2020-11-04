import { createUsersRepository } from "@/modules/users/models/factory";
import { UsersRepository } from "@/modules/users/models/UsersRepository";

export interface AppRepositories {
    Users: UsersRepository;
}

export function createRepositories(): AppRepositories {
    const usersRepository = createUsersRepository();

    return Object.freeze({
        Users: usersRepository,
    });
}
