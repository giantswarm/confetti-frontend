export enum WebsocketEvents {
    Connect,
    Disconnect,
    Message,
    Error,
}

export type WebsocketEventCallback = (payload: Record<string, unknown>) => void;

export interface WebsocketClient {
    connect(url: string): void;
    disconnect(): void;
    emit<T = Record<string, unknown>>(data: T): Promise<void>;
    on(event: WebsocketEvents, callback: WebsocketEventCallback): void;
    off(event: WebsocketEvents, callback: WebsocketEventCallback): void;
}

export class WebsocketClientImpl implements WebsocketClient {
    public connect(url: string): void {
        if (this.underlyingConnection) {
            return;
        }

        this.underlyingConnection = new WebSocket(url);
        this.addSocketEvents();
    }

    public disconnect(): void {
        if (!this.underlyingConnection) {
            return;
        }

        this.underlyingConnection.close();
    }

    public emit<T = Record<string, unknown>>(data: T): Promise<void> {
        if (!this.underlyingConnection) {
            return Promise.resolve();
        }

        try {
            const serializedData = JSON.stringify(data);
            this.underlyingConnection.send(serializedData);

            return Promise.resolve();
        } catch (err) {
            return Promise.reject(err);
        }
    }

    public on(event: WebsocketEvents, callback: WebsocketEventCallback): void {
        this.eventsMap[event].push(callback);
    }

    public off(event: WebsocketEvents, callback: WebsocketEventCallback): void {
        this.eventsMap[event].filter((cb) => !Object.is(callback, cb));
    }

    protected addSocketEvents(): void {
        if (!this.underlyingConnection) return;

        this.underlyingConnection.onopen = () => this.callEventCallbacks(WebsocketEvents.Connect, {});
        this.underlyingConnection.onclose = () => {
            this.callEventCallbacks(WebsocketEvents.Disconnect, {});

            this.underlyingConnection = null;
            this.eventsMap[WebsocketEvents.Connect] = [];
            this.eventsMap[WebsocketEvents.Disconnect] = [];
            this.eventsMap[WebsocketEvents.Message] = [];
            this.eventsMap[WebsocketEvents.Error] = [];
        };
        this.underlyingConnection.onmessage = (e) => {
            let data: Record<string, unknown> = {};
            try {
                data = JSON.parse(e.data);
            } catch {
                // Pass through.
            }

            this.callEventCallbacks(WebsocketEvents.Message, data);
        };
        this.underlyingConnection.onerror = () => {
            this.callEventCallbacks(WebsocketEvents.Error, {});
        };
    }

    protected callEventCallbacks(event: WebsocketEvents, payload: Record<string, unknown>): void {
        for (const callback of this.eventsMap[event]) {
            callback(payload);
        }
    }

    protected underlyingConnection: WebSocket | null = null;
    protected eventsMap: Record<WebsocketEvents, WebsocketEventCallback[]> = {
        [WebsocketEvents.Connect]: [],
        [WebsocketEvents.Disconnect]: [],
        [WebsocketEvents.Message]: [],
        [WebsocketEvents.Error]: [],
    };
}
