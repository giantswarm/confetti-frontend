import { HttpClient } from "./HttpClient";
import { WebsocketClient } from "./WebsocketClient";

export abstract class DataSource {
    constructor(protected readonly httpClient: HttpClient, protected readonly wsClient: WebsocketClient) {}
}
