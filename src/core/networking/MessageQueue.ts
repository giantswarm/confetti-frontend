export class MessageQueue<T> {
    constructor(protected maxLength: number) {}

    protected underlyingArray: T[] = [];

    public get length(): number {
        return this.underlyingArray.length;
    }

    public add(item: T): void {
        this.underlyingArray = [item, ...this.underlyingArray.slice(0, this.maxLength - 1)];
    }

    public clear(): void {
        this.underlyingArray = [];
    }

    public next(): T | null {
        if (this.length === 0) return null;

        const [entry, ...remaining] = this.underlyingArray;
        this.underlyingArray = remaining;

        return entry;
    }
}
