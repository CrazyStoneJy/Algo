import { memoize } from "../src/leetcode2623";
import flat from "../src/leetcode2625";
import { reduce } from "../src/leetcode2626";
import { compose } from "../src/leetcode2629";
import { filter } from "../src/leetcode2634";
import { map } from "../src/leetcode2635";
import { once } from "../src/leetcode2666";
import EventEmitter from "../src/leetcode2694";
import addTwoPromises from "../src/leetcode2723";

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
    });

    test('2666', () => {
        const fn = (a, b, c) => {
            return (a + b + c);
        };
        const calls = [[1, 2, 3], [2, 3, 6]];
        const foo = once(fn);
        const res = calls.map((_call: number[]) => foo(..._call));
        expect(res).toStrictEqual([6, undefined]);
    });

    // test('map', () => {
    //     const map = {};
    //     map['2#2'] = 4;
    //     console.log(Object.keys(map).indexOf('2#2'));

    //     const map2 = new Map<number, number>();
    //     map[2] = 4;
    //     console.log(map2.has(2));
    // });

    test('2623', () => {
        // actions = ["call","call","getCallCount","call","getCallCount"]
        // values = [[2,2],[2,2],[],[1,2],[]]
        let count = 0;
        const sum = (a, b) => {
            ++count;
            return a + b;
        };
        const foo = memoize(sum);
        expect([foo(2, 2), foo(2, 2), count, foo(1, 2), count]).toStrictEqual([4, 4, 1, 3, 2]);
    });

    test('2723', async () => {
        const promise1: Promise<number> = new Promise(resolve => setTimeout(() => resolve(2), 20));
        const promise2: Promise<number> = new Promise(resolve => setTimeout(() => resolve(5), 60));
        expect(await addTwoPromises(promise1, promise2)).toBe(7);
    });

    test('2694', () => {
        const eventEmitter = new EventEmitter();
        const sub = eventEmitter.subscribe('firstEvent', x => x + 1);
        const sub1 = eventEmitter.subscribe('firstEvent', x => x + 2);
        const sub2 = eventEmitter.subscribe('firstEvent', x => x + 3);
        expect(eventEmitter.emit('firstEvent', [5])).toStrictEqual([6, 7, 8]);
        sub1.unsubscribe();
        sub2.unsubscribe();
        expect(eventEmitter.emit('firstEvent', [5])).toStrictEqual([6]);
    })

    test('flatten array', () => {
        const arr = flat([1, 2, [3, 4]], 2);
        // console.log(arr);
        expect(arr).toStrictEqual([1, 2, 3, 4]);
    });

});
