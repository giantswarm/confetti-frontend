import { Config } from "@/app/Config";

export enum BackendURLProtocols {
    HTTP,
    WS,
}

export class BackendURL extends URL {
    constructor(
        config: Config,
        from: string,
        protocol: BackendURLProtocols = BackendURLProtocols.HTTP,
        options: Partial<URL> = {}
    ) {
        let urlProtocol = "http";
        switch (true) {
            case protocol === BackendURLProtocols.HTTP && config.backendHostSecure:
                urlProtocol = "https";
                break;
            case protocol === BackendURLProtocols.HTTP && !config.backendHostSecure:
                urlProtocol = "http";
                break;
            case protocol === BackendURLProtocols.WS && config.backendHostSecure:
                urlProtocol = "wss";
                break;
            case protocol === BackendURLProtocols.WS && !config.backendHostSecure:
                urlProtocol = "ws";
                break;
        }

        const baseURL = `${urlProtocol}://${config.backendHost}`;

        super(from, baseURL);

        const configuration: Partial<URL> = {
            ...options,
        };
        this.parseConfiguration(configuration);
    }

    private parseConfiguration(configuration: Partial<URL>): void {
        for (const [key, value] of Object.entries(configuration)) {
            // @ts-expect-error
            this[key] = value;
        }
    }
}
