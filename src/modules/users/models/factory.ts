import { HttpClientImpl } from "@/core/networking/HttpClient";

import { UsersService } from "../networking/UsersService";
import { UsersRepository } from "./UsersRepository";

export function createUsersRepository(): UsersRepository {
    const httpClient = new HttpClientImpl();
    const usersService = new UsersService(httpClient);
    const usersRepository = new UsersRepository(usersService);

    return usersRepository;
}
