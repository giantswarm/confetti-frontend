import { makeObservable, observable } from "mobx";

import { GenericObject } from "@/core/models/GenericObject";
import { EventType } from "@/modules/events/models/types/eventTypes";

export class Event extends GenericObject {
    constructor() {
        super();

        makeObservable(this, {
            active: observable,
            id: observable,
            name: observable,
            eventType: observable,
        });
    }

    public active: boolean = false;
    public id: string = "";
    public name: string = "";
    public eventType: EventType = "default";
}
