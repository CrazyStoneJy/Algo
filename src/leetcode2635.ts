export function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    let newArr: number[] = [];
    arr.forEach((value: number, index: number) => {
        newArr[index] = fn(value, index);
    });
    return newArr;
};