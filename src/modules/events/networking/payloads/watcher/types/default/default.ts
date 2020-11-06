import { EventsWatcherOnsiteEventConfigurationDetails } from "../onsite/onsite";
import { EVENT_INVALID_PAYLOAD_ERROR, EVENT_UPDATE_CONFIGURATION } from "./constants";

export interface EventsWatcherEventConfigurationDetails extends EventsWatcherOnsiteEventConfigurationDetails {}

export interface EventsWatcherEventConfiguration {
    active: boolean;
    id: string;
    name: string;
    event_type: string;
    details: EventsWatcherEventConfigurationDetails;
}

export interface EventsWatcherUpdateConfigurationPayload {
    type: typeof EVENT_UPDATE_CONFIGURATION;
    data: {
        message: string;
        configuration: EventsWatcherEventConfiguration;
    };
}

export interface EventsWatcherInvalidPayloadErrorPayload {
    type: typeof EVENT_INVALID_PAYLOAD_ERROR;
    data: {
        message: string;
    };
}

export type EventsWatcherDefaultEventPayloads =
    | EventsWatcherUpdateConfigurationPayload
    | EventsWatcherInvalidPayloadErrorPayload;
