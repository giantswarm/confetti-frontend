import { Config } from "@/app/Config";
import { BackendURL, BackendURLProtocols } from "@/core/networking/BackendURL";
import { HttpClient, HttpRequestMethods } from "@/core/networking/HttpClient";
import { PayloadHandler } from "@/core/networking/PayloadHandler";
import { Service } from "@/core/networking/Service";
import { WebsocketClient, WebsocketEvents } from "@/core/networking/WebsocketClient";
import {
    EventsListerResponsePayload,
    EventsListerResponsePayloadEvent,
} from "@/modules/events/networking/payloads/lister";

import { Event } from "../models/Event";
import { EventType, RemoteEvent } from "../models/types/eventTypes";
import { OnsiteEvent } from "../models/types/onsite/OnsiteEvent";
import { ONSITE_ROOM_JOIN_REQUEST, ONSITE_ROOM_LEAVE_REQUEST } from "./payloads/watcher/types/onsite/constants";
import {
    EventsWatcherOnsiteEventJoinRoomRequestPayload,
    EventsWatcherOnsiteEventLeaveRoomRequestPayload,
} from "./payloads/watcher/types/onsite/onsite";
import { EventsWatcherPayloads } from "./payloads/watcher/watcher";

export class EventsService extends Service {
    constructor(
        protected readonly config: Config,
        protected readonly httpClient: HttpClient,
        protected readonly wsClient: WebsocketClient
    ) {
        super();
    }

    public async getAll(authToken: string): Promise<RemoteEvent[]> {
        const url = new BackendURL(this.config, "/v1/events/", BackendURLProtocols.HTTP);

        try {
            this.httpClient.setRequestConfig({
                url: url.toString(),
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

    public async watchEvent(config: {
        eventID: string;
        authToken: string;
        onConnect: () => void;
        onDisconnect: () => void;
        messagePayloadHandlers: PayloadHandler<EventsWatcherPayloads>[];
    }): Promise<void> {
        return new Promise((resolve, reject) => {
            this.wsClient.on(WebsocketEvents.Connect, () => {
                config.onConnect();
                resolve();
            });
            this.wsClient.on(WebsocketEvents.Error, () => {
                // This is a hack to be able to catch errors during websocket handshake.
                reject(new Error("Unable to establish connection. Check your console for the full error output."));
            });
            this.wsClient.on(WebsocketEvents.Disconnect, () => {
                config.onDisconnect();
            });
            this.wsClient.on(WebsocketEvents.Message, (payload: EventsWatcherPayloads) => {
                for (const handler of config.messagePayloadHandlers) {
                    handler.process(payload);
                }
            });

            const url = new BackendURL(this.config, `/v1/events/${config.eventID}/watch/`, BackendURLProtocols.WS, {
                search: `token=${config.authToken}`,
            });

            this.wsClient.connect(url.toString());
        });
    }

    public stopWatchingEvent(_eventID: string): void {
        this.wsClient.disconnect();
    }

    public async joinOnsiteRoom(_eventID: string, onsiteRoomID: string): Promise<void> {
        const payload: EventsWatcherOnsiteEventJoinRoomRequestPayload = {
            type: ONSITE_ROOM_JOIN_REQUEST,
            data: {
                room_id: onsiteRoomID,
            },
        };

        try {
            await this.wsClient.emit(payload);

            return Promise.resolve();
        } catch (err) {
            return Promise.reject(err);
        }
    }

    public async leaveOnsiteRoom(_eventID: string, onsiteRoomID: string): Promise<void> {
        const payload: EventsWatcherOnsiteEventLeaveRoomRequestPayload = {
            type: ONSITE_ROOM_LEAVE_REQUEST,
            data: {
                room_id: onsiteRoomID,
            },
        };

        try {
            await this.wsClient.emit(payload);

            return Promise.resolve();
        } catch (err) {
            return Promise.reject(err);
        }
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
