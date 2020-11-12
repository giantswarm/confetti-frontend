import { Config } from "@/app/Config";

export enum BackendURLProtocols {
    HTTP,
    WS,
}

export class BackendURL extends URL {
    constructor(from: string, protocol: BackendURLProtocols = BackendURLProtocols.HTTP, options: Partial<URL> = {}) {
        let urlProtocol = "http";
        switch (true) {
            case protocol === BackendURLProtocols.HTTP && Config.getInstance().backendHostSecure:
                urlProtocol = "https";
                break;
            case protocol === BackendURLProtocols.HTTP && !Config.getInstance().backendHostSecure:
                urlProtocol = "http";
                break;
            case protocol === BackendURLProtocols.WS && Config.getInstance().backendHostSecure:
                urlProtocol = "wss";
                break;
            case protocol === BackendURLProtocols.WS && !Config.getInstance().backendHostSecure:
                urlProtocol = "ws";
                break;
        }

        const baseURL = `${urlProtocol}://${Config.getInstance().backendHost}`;

        super(from, baseURL);

        const config: Partial<URL> = {
            ...options,
        };
        this.parseConfig(config);
    }

    private parseConfig(config: Partial<URL>): void {
        for (const [key, value] of Object.entries(config)) {
            // @ts-expect-error
            this[key] = value;
        }
    }
}
