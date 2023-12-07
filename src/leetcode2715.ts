type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Fn = (...args: JSONValue[]) => void

function cancellable(fn: Fn, args: JSONValue[], t: number): Function {
	const cancel = () => {
        timerId && clearTimeout(timerId);
    };
    const timerId = setTimeout(() => {
        fn(...args);
    }, t);
    return cancel;
};