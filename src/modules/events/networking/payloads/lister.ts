export interface EventsListerResponsePayloadEvent {
    active: boolean;
    id: string;
    name: string;
    event_type: string;
}

export interface EventsListerResponsePayload {
    events: EventsListerResponsePayloadEvent[];
}
