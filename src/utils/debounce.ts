// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Method = (...args: any[]) => void;

export interface Options {
    isImmediate: boolean;
}

export interface DebouncedFunction<F extends Method> {
    (this: ThisParameterType<F>, ...args: Parameters<F>): void;
    cancel: () => void;
}

export function debounce<F extends Method>(
    func: F,
    // eslint-disable-next-line no-magic-numbers
    waitMilliseconds = 50,
    options: Options = {
        isImmediate: false,
    }
): DebouncedFunction<F> {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const debouncedFunction = function (this: ThisParameterType<F>, ...args: Parameters<F>) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const context = this;

        const doLater = () => {
            timeoutId = null;
            if (!options.isImmediate) {
                func.apply(context, args);
            }
        };

        const shouldCallNow = options.isImmediate && timeoutId === null;

        if (timeoutId !== null) {
            clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(doLater, waitMilliseconds);

        if (shouldCallNow) {
            func.apply(context, args);
        }
    };

    debouncedFunction.cancel = function () {
        if (timeoutId !== null) {
            clearTimeout(timeoutId);
        }
    };

    return debouncedFunction;
}
