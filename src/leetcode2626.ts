type Fn = (accum: number, curr: number) => number

export function reduce(nums: number[], fn: Fn, init: number): number {
    let res = 0;
    nums.forEach((value: number, index: number) => {
        if (index === 0) {
            res = fn(init, value);
        } else {
            res = fn(res, value);
        }
        // console.log("res: ", res);
    });
    return nums.length === 0 ? res + init : res;
};