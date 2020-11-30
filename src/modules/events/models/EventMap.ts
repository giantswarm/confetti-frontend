import { makeObservable, observable } from "mobx";

import { GenericObject } from "@/core/models/GenericObject";

export class EventMap extends GenericObject {
    constructor() {
        super();

        makeObservable(this, {
            scale: observable,
            centerAnchor: observable,
        });
    }

    public scale: number = 1.0;
    public centerAnchor: [x: number, y: number] = [0.0, 0.0];
}
