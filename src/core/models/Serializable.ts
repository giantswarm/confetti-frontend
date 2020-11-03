export interface Serializable<T extends Object> {
    serialize(): T;
    deserialize(from: T): void;
}
