import { action, makeObservable, observable } from "mobx";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class RepositoryValue<T extends any> {
    constructor(public data: T | null = null, public loading: boolean = true, public error = "") {
        makeObservable(this, {
            data: observable,
            loading: observable,
            error: observable,
            clear: action,
        });
    }

    public clear() {
        this.data = this.defaultValues.data;
        this.loading = this.defaultValues.loading;
        this.error = this.defaultValues.error;
    }

    protected defaultValues = {
        data: this.data,
        loading: this.loading,
        error: this.error,
    };
}
