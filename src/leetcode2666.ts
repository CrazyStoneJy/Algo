type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type OnceFn = (...args: JSONValue[]) => JSONValue | undefined

export function once(fn: Function): OnceFn {
    let isInvoked = false;
    return function (...args) {
        if (!isInvoked) {
            isInvoked = true;
            return fn(...args);
        }
        return undefined;
    };
}