import { createContext, useContext } from "react";

import { Config } from "./Config";

const configContext = createContext<Config | null>(null);

interface ConfigProviderProps {
    config: Config;
}

export const ConfigProvider: React.FC<ConfigProviderProps> = ({ config, children }) => {
    return <configContext.Provider value={config}>{children}</configContext.Provider>;
};

export function useConfig(): Config {
    const config = useContext(configContext);
    if (!config) {
        throw new Error("useConfig must be used within a ConfigProvider.");
    }

    return config;
}
