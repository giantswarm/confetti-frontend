import { DataSource } from "@/core/models/DataSource";

export abstract class Service {
    constructor(protected readonly dataSource: DataSource) {}
}
