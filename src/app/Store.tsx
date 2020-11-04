import { enableStaticRendering, useLocalObservable } from "mobx-react-lite";
import { createContext, useContext } from "react";

import { AppRepositories } from "./factory";

const isServer = typeof window === "undefined";
enableStaticRendering(isServer);

const storeContext = createContext<AppRepositories | null>(null);

interface StoreProviderProps {
    storeFactory: () => AppRepositories;
}

export const StoreProvider: React.FC<StoreProviderProps> = ({ storeFactory, children }) => {
    const store = useLocalObservable(storeFactory);

    return <storeContext.Provider value={store}>{children}</storeContext.Provider>;
};

export function useStore(): AppRepositories {
    const store = useContext(storeContext);
    if (!store) {
        throw new Error("useStore must be used within a StoreProvider.");
    }

    return store;
}
