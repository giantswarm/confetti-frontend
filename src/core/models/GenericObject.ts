export type PropertyMap = Record<string, unknown>;

export abstract class GenericObject {
    public abstract async serialize(): Promise<PropertyMap>;
    public abstract async deserialize(from: PropertyMap): Promise<void>;
}
