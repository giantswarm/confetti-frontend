import { extendObservable, observable } from "mobx";

import { Event, EventType } from "@/modules/events/models/Event";

import { OnsiteEventRoom } from "./OnsiteEventRoom";

export class OnsiteEvent extends Event {
    constructor() {
        super();

        extendObservable(this, {
            rooms: observable.array,
        });
    }

    public eventType: EventType = "onsite";
    public rooms: OnsiteEventRoom[] = [];
}
