type F = (x: number) => number;

export function compose(functions: F[]): F {

    if (functions.length === 0) {
        return (x: number) => x;
    }

    return functions.reverse().reduce((pre: Function, cur: Function) => {
        return function (x: number) {
            return cur(pre(x));
        }
    });

};