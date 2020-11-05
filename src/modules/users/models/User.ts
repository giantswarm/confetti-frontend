import { makeObservable, observable } from "mobx";

import { GenericObject, PropertyMap } from "@/core/models/GenericObject";

export class UserImpl extends GenericObject {
    constructor() {
        super();

        makeObservable(this, {
            userName: observable,
            token: observable,
        });
    }

    public userName: string = "";
    public token: string = "";

    public async serialize(): Promise<PropertyMap> {
        return Promise.resolve({
            userName: this.userName,
            token: this.token,
        });
    }

    public async deserialize(from: PropertyMap): Promise<void> {
        this.userName = from.username as string;
        this.token = from.token as string;

        return Promise.resolve();
    }
}
