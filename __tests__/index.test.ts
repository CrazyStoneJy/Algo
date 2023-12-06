import { reduce } from "../src/leetcode2626";
import { compose } from "../src/leetcode2629";
import { filter } from "../src/leetcode2634";
import { map } from "../src/leetcode2635";

describe('leetcode', () => {
    test('2635', () => {
        const arr = [1, 2, 3];
        function plusI(n: number, i: number) {
            return n + i;
        }
        expect(map(arr, plusI)).toStrictEqual([1, 3, 5]);
    });

    test('2634', () => {
        const arr = [1, 2, 3];
        const fn = function firstIndex(n: number, i: number): boolean { return i === 0; }
        expect(filter(arr, fn)).toStrictEqual([1]);
    });

    test('2626', () => {
        const arr = [1, 2, 3, 4];
        const fn = function sum(accum, curr) { return accum + curr; }
        const init = 0;
        expect(reduce(arr, fn, init)).toStrictEqual(10);
    });

    test('2629', () => {
        const functions = [x => x + 1, x => x * x, x => 2 * x];
        const x = 4;
        expect(compose(functions)(x)).toBe(65);
    })
});
