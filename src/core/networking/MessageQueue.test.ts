import { MessageQueue } from "./MessageQueue";

describe("MessageQueue", () => {
    it("keeps the maximum length, regardless of the added items", () => {
        const maxLength = 25;
        const overloadLength = maxLength * 3;

        const queue = new MessageQueue(maxLength);
        for (let i = 0; i < overloadLength; i++) {
            queue.add(i);
        }

        expect(queue.length).toBe(maxLength);
    });

    it("can be cleared", () => {
        const maxLength = 25;

        const queue = new MessageQueue(maxLength);
        for (let i = 0; i < maxLength; i++) {
            queue.add(i);
        }

        queue.clear();
        expect(queue.length).toBe(0);
    });

    it("extracts all the values, until there are none left", () => {
        const maxLength = 25;
        const queue = new MessageQueue(maxLength);

        let i = 0;
        for (; i < maxLength; i++) {
            queue.add(i);
        }
        for (i; i > 0; i--) {
            expect(queue.length).toBe(i);
            expect(queue.next()).toBe(i - 1);
        }

        expect(queue.next()).toBeNull();
    });
});
