import { makeObservable, observable } from "mobx";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class RepositoryValue<T extends any> {
    constructor(public data: T | null = null, public loading: boolean = true, public error = "") {
        makeObservable(this, {
            data: observable,
            loading: observable,
            error: observable,
        });
    }
}
