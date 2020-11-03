import { DataSource } from "@/core/models/DataSource";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export abstract class Service<T extends any> {
    // @ts-expect-error
    constructor(private readonly dataSource: DataSource<T>) {}
}
