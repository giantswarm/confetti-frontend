import { Config } from "@/app/Config";
import { HttpClient, HttpRequestMethods } from "@/core/networking/HttpClient";
import { Service } from "@/core/networking/Service";
import { WebsocketClient, WebsocketEvents } from "@/core/networking/WebsocketClient";
import {
    EventsListerResponsePayload,
    EventsListerResponsePayloadEvent,
} from "@/modules/events/networking/payloads/lister";

import { Event } from "../models/Event";
import { EventType, RemoteEvent } from "../models/types/eventTypes";
import { OnsiteEvent } from "../models/types/onsite/OnsiteEvent";

export class EventsService extends Service {
    constructor(protected readonly httpClient: HttpClient, protected readonly wsClient: WebsocketClient) {
        super();
    }

    public async getAll(authToken: string): Promise<RemoteEvent[]> {
        try {
            this.httpClient.setRequestConfig({
                baseURL: `http://${Config.getInstance().backendHost}`,
                url: "/v1/events/",
                method: HttpRequestMethods.GET,
            });
            this.httpClient.setAuthorizationToken("Bearer", authToken);

            const result = await this.httpClient.execute<EventsListerResponsePayload>();

            const events: RemoteEvent[] = [];
            if (result.data.events) {
                for (const responseEvent of result.data.events) {
                    events.push(this.parseEvent(responseEvent));
                }
            }

            return events;
        } catch (err: unknown) {
            return Promise.reject(this.getErrorFromResponse(err));
        }
    }

    public async watchEvent(req: {
        eventID: string;
        authToken: string;
        onConnect: () => void;
        onDisconnect: () => void;
        onMessage: (payload: Record<string, unknown>) => void;
    }): Promise<void> {
        return new Promise((resolve, reject) => {
            this.wsClient.on(WebsocketEvents.Connect, () => {
                req.onConnect();
                resolve();
            });
            this.wsClient.on(WebsocketEvents.Error, () => {
                // This is a hack to be able to catch errors during websocket handshake.
                reject(new Error("Unable to establish connection. Check your console for the full error output."));
            });
            this.wsClient.on(WebsocketEvents.Disconnect, () => {
                req.onDisconnect();
            });
            this.wsClient.on(WebsocketEvents.Message, (payload) => {
                req.onMessage(payload);
            });

            this.wsClient.connect(
                `ws://${Config.getInstance().backendHost}/v1/events/${req.eventID}/watch/?token=${req.authToken}`
            );
        });
    }

    private parseEvent(responseEvent: EventsListerResponsePayloadEvent): RemoteEvent {
        let newEvent: RemoteEvent = {} as RemoteEvent;
        switch (responseEvent.event_type) {
            case "onsite":
                newEvent = new OnsiteEvent();
                break;
            default:
                newEvent = new Event();
        }

        newEvent.active = responseEvent.active ?? newEvent.active;
        newEvent.eventType = (responseEvent.event_type as EventType) ?? newEvent.eventType;
        newEvent.id = responseEvent.id ?? newEvent.id;
        newEvent.name = responseEvent.name ?? newEvent.name;

        return newEvent;
    }
}
