import { MessageQueue } from "./MessageQueue";

export enum WebsocketEvents {
    Connect,
    Disconnect,
    Message,
    Error,
}

export type WebsocketEventCallback<T = Record<string, unknown>> = (payload: T) => void;

export interface WebsocketClient {
    connect(url: string): void;
    disconnect(): void;
    emit<T = Record<string, unknown>>(data: T): Promise<void>;
    on<T = Record<string, unknown>>(event: WebsocketEvents, callback: WebsocketEventCallback<T>): void;
    off(event: WebsocketEvents, callback: WebsocketEventCallback): void;
}

export interface WebsocketClientConfig {
    processOfflineEvents: boolean;
    offlineEventsQueueLength: number;
    autoReconnect: boolean;
    autoReconnectInterval: number;
}

export class WebsocketClientImpl implements WebsocketClient {
    constructor(config?: Partial<WebsocketClientConfig>) {
        this.config = Object.assign({}, this.config, config);
    }

    public connect(url: string): void {
        if (this.underlyingConnection) {
            return;
        }

        this.underlyingConnection = new WebSocket(url);
        this.addSocketEvents(url);
    }

    public disconnect(): void {
        this.shouldAutoReconnect = false;
        this.underlyingConnection?.close();
    }

    public emit<T = Record<string, unknown>>(data: T): Promise<void> {
        if (!this.underlyingConnection) {
            if (this.config.processOfflineEvents) {
                this.messageQueue.add(data);
            }

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

    public on<T = Record<string, unknown>>(event: WebsocketEvents, callback: WebsocketEventCallback<T>): void {
        this.eventsMap[event].push(callback as WebsocketEventCallback);
    }

    public off(event: WebsocketEvents, callback: WebsocketEventCallback): void {
        this.eventsMap[event].filter((cb) => !Object.is(callback, cb));
    }

    protected addSocketEvents(url: string): void {
        if (!this.underlyingConnection) return;

        this.underlyingConnection.onopen = () => {
            this.callEventCallbacks(WebsocketEvents.Connect, {});
            this.processMessageQueue();

            this.stopAutoReconnectTicker();
            this.shouldAutoReconnect = this.config.autoReconnect;
        };
        this.underlyingConnection.onclose = () => {
            this.callEventCallbacks(WebsocketEvents.Disconnect, {});

            this.underlyingConnection = null;

            if (this.shouldAutoReconnect) {
                this.startAutoReconnectTicker(url);
            }
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
            this.shouldAutoReconnect = this.config.autoReconnect;
            this.callEventCallbacks(WebsocketEvents.Error, {});
        };
    }

    protected callEventCallbacks(event: WebsocketEvents, payload: Record<string, unknown>): void {
        for (const callback of this.eventsMap[event]) {
            callback(payload);
        }
    }

    protected processMessageQueue = (): void => {
        if (!this.underlyingConnection || !this.config.processOfflineEvents) return;

        let message: unknown | null = this.messageQueue.next();
        while (message !== null) {
            this.emit(message);

            message = this.messageQueue.next();
        }
    };

    protected startAutoReconnectTicker(url: string): void {
        this.autoReconnectTicker = setInterval(() => this.connect(url), this.config.autoReconnectInterval);
    }

    protected stopAutoReconnectTicker(): void {
        clearInterval(this.autoReconnectTicker);
    }

    protected config: WebsocketClientConfig = {
        processOfflineEvents: false,
        offlineEventsQueueLength: 25,
        autoReconnect: true,
        autoReconnectInterval: 10000,
    };
    protected underlyingConnection: WebSocket | null = null;
    protected eventsMap: Record<WebsocketEvents, WebsocketEventCallback[]> = {
        [WebsocketEvents.Connect]: [],
        [WebsocketEvents.Disconnect]: [],
        [WebsocketEvents.Message]: [],
        [WebsocketEvents.Error]: [],
    };
    protected messageQueue = new MessageQueue<unknown>(this.config.offlineEventsQueueLength);
    protected shouldAutoReconnect: boolean = this.config.autoReconnect;
    protected autoReconnectTicker: number = 0;
}
