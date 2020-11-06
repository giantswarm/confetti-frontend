export interface PersistingStrategy {
    persist<T = Record<string, unknown>>(key: string, value: T): void;
    restore<T = Record<string, unknown>>(key: string): T | null;
    delete(key: string): void;
}
