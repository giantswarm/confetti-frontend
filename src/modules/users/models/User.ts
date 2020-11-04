import { makeObservable, observable } from "mobx";

import { GenericObject } from "@/core/models/GenericObject";

export interface User {
    username: string;
    token: string;
}

export class UserImpl extends GenericObject<User> implements User {
    constructor() {
        super();

        makeObservable(this, {
            username: observable,
            token: observable,
        });
    }

    public username: string = "";
    public token: string = "";

    public async serialize(): Promise<User> {
        return Promise.resolve({
            username: this.username,
            token: this.token,
        });
    }

    public async deserialize(from: User): Promise<void> {
        this.username = from.username ?? "";
        this.token = from.token ?? "";

        return Promise.resolve();
    }
}
