import { makeObservable, observable } from "mobx";

import { Event } from "@/modules/events/models/Event";
import { EventType } from "@/modules/events/models/types/eventTypes";
import { OnsiteEventRoom } from "@/modules/events/models/types/onsite/OnsiteEventRoom";

export class OnsiteEvent extends Event {
    constructor() {
        super();

        makeObservable(
            this,
            {
                rooms: observable,
            },
            { deep: true }
        );
    }

    public eventType: EventType = "onsite";
    public rooms: OnsiteEventRoom[] = [];
}
