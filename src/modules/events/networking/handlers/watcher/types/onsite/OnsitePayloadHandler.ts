import { PayloadHandler } from "@/core/networking/PayloadHandler";

import {
    ONSITE_ROOM_JOIN_ERROR,
    ONSITE_ROOM_JOIN_SUCCESS,
    ONSITE_ROOM_LEAVE_ERROR,
    ONSITE_ROOM_LEAVE_SUCCESS,
    ONSITE_ROOM_UPDATE_ATTENDEE_COUNTER,
} from "../../../../payloads/watcher/types/onsite/constants";
import { EventsWatcherOnsiteEventPayloads } from "../../../../payloads/watcher/types/onsite/onsite";

export class OnsiteEventPayloadHandler implements PayloadHandler<EventsWatcherOnsiteEventPayloads> {
    constructor(
        private callbacks: {
            onRoomJoin: (roomID: string) => void;
            onRoomJoinError: (roomID: string, errorMessage: string) => void;
            onRoomLeave: (roomID: string) => void;
            onRoomLeaveError: (roomID: string, errorMessage: string) => void;
            onRoomUpdateAttendeeCounter: (roomID: string, counter: number) => void;
        }
    ) {}

    public process(payload: EventsWatcherOnsiteEventPayloads): void {
        switch (payload.type) {
            case ONSITE_ROOM_JOIN_SUCCESS:
                this.callbacks.onRoomJoin(payload.data.room_id);
                break;
            case ONSITE_ROOM_JOIN_ERROR:
                this.callbacks.onRoomJoinError(payload.data.room_id, payload.data.message);
                break;
            case ONSITE_ROOM_LEAVE_SUCCESS:
                this.callbacks.onRoomLeave(payload.data.room_id);
                break;
            case ONSITE_ROOM_LEAVE_ERROR:
                this.callbacks.onRoomLeaveError(payload.data.room_id, payload.data.message);
                break;
            case ONSITE_ROOM_UPDATE_ATTENDEE_COUNTER:
                this.callbacks.onRoomUpdateAttendeeCounter(payload.data.room_id, payload.data.attendee_counter);
                break;
        }
    }
}
