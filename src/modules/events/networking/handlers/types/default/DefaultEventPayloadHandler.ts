import { PayloadHandler } from "@/core/networking/PayloadHandler";
import { Event } from "@/modules/events/models/Event";
import { EventType, RemoteEvent } from "@/modules/events/models/types/eventTypes";
import { OnsiteEvent } from "@/modules/events/models/types/onsite/OnsiteEvent";
import { OnsiteEventRoom } from "@/modules/events/models/types/onsite/OnsiteEventRoom";

import {
    EVENT_INVALID_PAYLOAD_ERROR,
    EVENT_UPDATE_CONFIGURATION,
} from "../../../payloads/watcher/types/default/constants";
import {
    EventsWatcherDefaultEventPayloads,
    EventsWatcherEventConfiguration,
} from "../../../payloads/watcher/types/default/default";

export class DefaultEventPayloadHandler implements PayloadHandler<EventsWatcherDefaultEventPayloads> {
    constructor(
        private callbacks: {
            onInvalidPayload: (errorMessage: string) => void;
            onUpdateConfiguration: (newEvent: RemoteEvent) => void;
        }
    ) {}

    public process(payload: EventsWatcherDefaultEventPayloads): void {
        switch (payload.type) {
            case EVENT_INVALID_PAYLOAD_ERROR:
                this.callbacks.onInvalidPayload(payload.data.message);
                break;
            case EVENT_UPDATE_CONFIGURATION:
                this.callbacks.onUpdateConfiguration(this.parseEventFromConfiguration(payload.data.configuration));
                break;
        }
    }

    private parseEventFromConfiguration(configuration: EventsWatcherEventConfiguration): RemoteEvent {
        let newEvent: RemoteEvent = {} as RemoteEvent;
        switch (configuration.event_type) {
            case "onsite":
                newEvent = new OnsiteEvent();
                if (configuration.details.rooms) {
                    (newEvent as OnsiteEvent).rooms = configuration.details.rooms.map((room) => {
                        const newRoom = new OnsiteEventRoom();

                        newRoom.id = room.id ?? newRoom.id;
                        newRoom.name = room.name ?? newRoom.name;
                        newRoom.description = room.description ?? newRoom.description;
                        newRoom.conferenceURL = room.conference_url ?? newRoom.conferenceURL;

                        return newRoom;
                    });
                }
                break;
            default:
                newEvent = new Event();
        }

        newEvent.active = configuration.active ?? newEvent.active;
        newEvent.eventType = (configuration.event_type as EventType) ?? newEvent.eventType;
        newEvent.id = configuration.id ?? newEvent.id;
        newEvent.name = configuration.name ?? newEvent.name;

        return newEvent;
    }
}
