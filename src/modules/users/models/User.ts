import { makeObservable, observable } from "mobx";

import { GenericObject } from "@/core/models/GenericObject";

export class User extends GenericObject {
    constructor() {
        super();

        makeObservable(this, {
            userName: observable,
            token: observable,
        });
    }

    public userName: string = "";
    public token: string = "";

    public toJSON() {
        return {
            userName: this.userName,
            token: this.token,
        };
    }
}
