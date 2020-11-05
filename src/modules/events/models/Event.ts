import { makeObservable, observable } from "mobx";

import { GenericObject } from "@/core/models/GenericObject";

export type EventType = string;

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
