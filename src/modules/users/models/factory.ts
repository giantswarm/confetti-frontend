import { Config } from "@/app/Config";
import { LocalStoragePersistingStrategy } from "@/core/models/LocalStoragePersistingStrategy";
import { HttpClientImpl } from "@/core/networking/HttpClient";
import { UsersRepository } from "@/modules/users/models/UsersRepository";
import { UsersService } from "@/modules/users/networking/UsersService";

export function createUsersRepository(config: Config): UsersRepository {
    const persistingStrategy = new LocalStoragePersistingStrategy();
    const httpClient = new HttpClientImpl();
    const usersService = new UsersService(config, httpClient);
    const usersRepository = new UsersRepository(persistingStrategy, usersService);

    return usersRepository;
}
