// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Method = (...args: any[]) => void;

export interface ThrottledFunction<F extends Method> {
    (this: ThisParameterType<F>, ...args: Parameters<F>): void;
}

export function throttle<F extends Method>(
    func: F,
    // eslint-disable-next-line no-magic-numbers
    waitMilliseconds = 50
): ThrottledFunction<F> {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const throttledFunction = function (this: ThisParameterType<F>, ...args: Parameters<F>) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const context = this;

        const doLater = () => {
            timeoutId = null;
            func.apply(context, args);
        };

        if (timeoutId === null) {
            timeoutId = setTimeout(doLater, waitMilliseconds);
        }
    };

    return throttledFunction;
}
