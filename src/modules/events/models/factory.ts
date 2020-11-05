import { HttpClientImpl } from "@/core/networking/HttpClient";
import { EventsRepository } from "@/modules/events/models/EventsRepository";
import { EventsService } from "@/modules/events/networking/EventsService";
import { UsersRepository } from "@/modules/users/models/UsersRepository";

export function createEventsRepository(usersRepository: UsersRepository): EventsRepository {
    const httpClient = new HttpClientImpl();
    const eventsService = new EventsService(httpClient);
    const eventsRepository = new EventsRepository(eventsService, usersRepository);

    return eventsRepository;
}
