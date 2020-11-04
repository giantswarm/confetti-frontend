export abstract class GenericObject<T> {
    public abstract async serialize(): Promise<T>;
    public abstract async deserialize(from: T): Promise<void>;
}
