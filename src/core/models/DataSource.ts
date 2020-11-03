export type DataSourceSubscribeCallback<T> = (newObj: T) => void;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface DataSource<T extends any> {
    get(): Promise<T[]>;
    create(newObj: T): Promise<T>;
    update(newObj: T): Promise<T>;
    delete(newObj: T): Promise<void>;
    subscribe(callback: DataSourceSubscribeCallback<T>): boolean;
    unsubscribe(callback: DataSourceSubscribeCallback<T>): boolean;
}
