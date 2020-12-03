import { makeObservable, observable } from "mobx";

import { GenericObject } from "@/core/models/GenericObject";

export class EventMap extends GenericObject {
    constructor() {
        super();

        makeObservable(this, {
            scale: observable,
            centerAnchorX: observable,
            centerAnchorY: observable,
        });
    }

    public scale = 1.0;
    public centerAnchorX = 0.0;
    public centerAnchorY = 0.0;
}
