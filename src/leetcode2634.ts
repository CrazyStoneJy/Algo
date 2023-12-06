type Fn = (n: number, i: number) => any

export function filter(arr: number[], fn: Fn): number[] {
    let newArr: number[] = [];
    arr.forEach((value: number, index: number) => {
        if (fn(value, index)) {
            newArr.push(value);
        }
    });
    return newArr;
};