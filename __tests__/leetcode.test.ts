import { longestPalindrome } from "../src/leetcode5";

describe('leetcode', () => {
    test('5', () => {
        const s = "ac";
        const res = longestPalindrome(s);
        expect(res).toBe("a");
    });
})