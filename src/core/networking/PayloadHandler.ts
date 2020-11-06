export interface PayloadHandler<T = Record<string, unknown>> {
    process(payload: T): void;
}
