import { LocalStoragePersistingStrategy } from "@/core/models/LocalStoragePersistingStrategy";
import { HttpClientImpl } from "@/core/networking/HttpClient";
import { WebsocketClientImpl } from "@/core/networking/WebsocketClient";
import { EventsRepository } from "@/modules/events/models/EventsRepository";
import { EventsService } from "@/modules/events/networking/EventsService";
import { UsersRepository } from "@/modules/users/models/UsersRepository";

export function createEventsRepository(usersRepository: UsersRepository): EventsRepository {
    const persistingStrategy = new LocalStoragePersistingStrategy();
    const httpClient = new HttpClientImpl();
    const wsClient = new WebsocketClientImpl({
        processOfflineEvents: true,
    });
    const eventsService = new EventsService(httpClient, wsClient);
    const eventsRepository = new EventsRepository(persistingStrategy, eventsService, usersRepository);

    return eventsRepository;
}
