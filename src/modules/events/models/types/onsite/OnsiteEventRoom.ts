import { makeObservable, observable } from "mobx";

import { GenericObject } from "@/core/models/GenericObject";

export class OnsiteEventRoom extends GenericObject {
    constructor() {
        super();

        makeObservable(this, {
            id: observable,
            name: observable,
            description: observable,
            conferenceURL: observable,
            attendeeCounter: observable,
        });
    }

    public id: string = "";
    public name: string = "";
    public description: string = "";
    public conferenceURL: string = "";
    public attendeeCounter: number = 0;
}
