import {
    ONSITE_ROOM_JOIN_ERROR,
    ONSITE_ROOM_JOIN_REQUEST,
    ONSITE_ROOM_JOIN_SUCCESS,
    ONSITE_ROOM_LEAVE_ERROR,
    ONSITE_ROOM_LEAVE_REQUEST,
    ONSITE_ROOM_LEAVE_SUCCESS,
    ONSITE_ROOM_UPDATE_ATTENDEE_COUNTER,
} from "./constants";

export interface EventsWatcherOnsiteEventRoom {
    id: string;
    name: string;
    description: string;
    conference_url: string;
}

export interface EventsWatcherOnsiteEventConfigurationDetails {
    rooms?: EventsWatcherOnsiteEventRoom[];
}

export interface EventsWatcherOnsiteEventJoinRoomRequestPayload {
    type: typeof ONSITE_ROOM_JOIN_REQUEST;
    data: {
        room_id: string;
    };
}

export interface EventsWatcherOnsiteEventJoinRoomErrorPayload {
    type: typeof ONSITE_ROOM_JOIN_ERROR;
    data: {
        message: string;
        room_id: string;
    };
}

export interface EventsWatcherOnsiteEventJoinRoomSuccessPayload {
    type: typeof ONSITE_ROOM_JOIN_SUCCESS;
    data: {
        message: string;
        room_id: string;
    };
}

export interface EventsWatcherOnsiteEventLeaveRoomRequestPayload {
    type: typeof ONSITE_ROOM_LEAVE_REQUEST;
    data: {
        room_id: string;
    };
}

export interface EventsWatcherOnsiteEventLeaveRoomErrorPayload {
    type: typeof ONSITE_ROOM_LEAVE_ERROR;
    data: {
        message: string;
        room_id: string;
    };
}

export interface EventsWatcherOnsiteEventLeaveRoomSuccessPayload {
    type: typeof ONSITE_ROOM_LEAVE_SUCCESS;
    data: {
        message: string;
        room_id: string;
    };
}

export interface EventsWatcherOnsiteEventUpdateAttendeeCounterPayload {
    type: typeof ONSITE_ROOM_UPDATE_ATTENDEE_COUNTER;
    data: {
        room_id: string;
        attendee_counter: number;
    };
}

export type EventsWatcherOnsiteEventPayloads =
    | EventsWatcherOnsiteEventJoinRoomRequestPayload
    | EventsWatcherOnsiteEventJoinRoomErrorPayload
    | EventsWatcherOnsiteEventJoinRoomSuccessPayload
    | EventsWatcherOnsiteEventLeaveRoomRequestPayload
    | EventsWatcherOnsiteEventLeaveRoomErrorPayload
    | EventsWatcherOnsiteEventLeaveRoomSuccessPayload
    | EventsWatcherOnsiteEventUpdateAttendeeCounterPayload;
