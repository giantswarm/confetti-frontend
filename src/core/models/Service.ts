import { DataSource } from "@/core/networking/DataSource";

export abstract class Service {
    constructor(protected readonly dataSource: DataSource) {}
}
