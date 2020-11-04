import { makeObservable, observable } from "mobx";

export class RepositoryValue<T extends object> {
    constructor(public data: T | null = null, public loading: boolean = true, public error = "") {
        makeObservable(this, {
            data: observable,
            loading: observable,
            error: observable,
        });
    }
}
