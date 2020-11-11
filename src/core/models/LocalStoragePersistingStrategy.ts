import { Config } from "@/app/Config";

import { PersistingStrategy } from "./PersistingStrategy";

export class LocalStoragePersistingStrategy implements PersistingStrategy {
    public persist<T = Record<string, unknown>>(key: string, value: T): void {
        if (Config.getInstance().isServer) return;

        const serializedData = JSON.stringify(value);
        localStorage.setItem(key, serializedData);
    }

    public restore<T = Record<string, unknown>>(key: string): T | null {
        if (Config.getInstance().isServer) return null;

        const serializedData = localStorage.getItem(key);
        if (!serializedData) return null;

        const data = JSON.parse(serializedData);

        return data;
    }

    public delete(key: string): void {
        if (Config.getInstance().isServer) return;
        localStorage.removeItem(key);
    }
}
