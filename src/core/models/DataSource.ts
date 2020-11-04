import { HttpClient } from "../networking/HttpClient";
import { WebsocketClient } from "../networking/WebsocketClient";

export abstract class DataSource {
    constructor(protected readonly httpClient: HttpClient, protected readonly wsClient: WebsocketClient) {}
}
