import { HttpClientImpl } from "@/core/networking/HttpClient";
import { WebsocketClientImpl } from "@/core/networking/WebsocketClient";
import { EventsRepository } from "@/modules/events/models/EventsRepository";
import { EventsService } from "@/modules/events/networking/EventsService";
import { UsersRepository } from "@/modules/users/models/UsersRepository";

export function createEventsRepository(usersRepository: UsersRepository): EventsRepository {
    const httpClient = new HttpClientImpl();
    const wsClient = new WebsocketClientImpl();
    const eventsService = new EventsService(httpClient, wsClient);
    const eventsRepository = new EventsRepository(eventsService, usersRepository);

    return eventsRepository;
}
