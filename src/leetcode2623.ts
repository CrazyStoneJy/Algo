type Fn = (...params: number[]) => number

export function memoize(fn: Fn): Fn {
    
    let lastArgs: number[] = undefined;
    let lastRes: number = 0;
    let map = new Map<string, number>();
    function contains(...args: number[]): boolean {
        return map.has(genKey(...args));
    }

    function genKey(...args: number[]): string {
        const key = args.map((value: number) => value + "").reduce((prev: string, cur: string) => {
            return prev + "#" + cur;
        });
        return key;
    }

    return function(...args: number[]) {
        if (!lastArgs) {
            return invoke(fn, ...args);
        } else {
            if (contains(...args)) {
                return map.get(genKey(...args));
            }
            return invoke(fn, ...args);
        }
    }

    function invoke(fn: Fn, ...args: number[]): number {
        lastArgs = args;
        lastRes = fn(...args);
        map.set(genKey(...lastArgs), lastRes);
        return lastRes;
    }
}