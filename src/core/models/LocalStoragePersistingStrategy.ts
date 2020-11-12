import { PersistingStrategy } from "./PersistingStrategy";

export class LocalStoragePersistingStrategy implements PersistingStrategy {
    public persist<T = Record<string, unknown>>(key: string, value: T): void {
        if (typeof window === "undefined") return;

        const serializedData = JSON.stringify(value);
        localStorage.setItem(key, serializedData);
    }

    public restore<T = Record<string, unknown>>(key: string): T | null {
        if (typeof window === "undefined") return null;

        const serializedData = localStorage.getItem(key);
        if (!serializedData) return null;

        const data = JSON.parse(serializedData);

        return data;
    }

    public delete(key: string): void {
        if (typeof window === "undefined") return;
        localStorage.removeItem(key);
    }
}
