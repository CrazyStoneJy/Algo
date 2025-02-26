import { divisorSubstrings } from "../src/2269";
import { countPairs } from "../src/2284";
import { minSubArrayLen } from "../src/leetcode209";
import { convert, findWords, ocontain, output } from "../src/leetcode212";
import { longestPalindrome } from "../src/leetcode5";

describe('leetcode', () => {
    // test('5', () => {
    //     const s = "ac";
    //     const res = longestPalindrome(s);
    //     expect(res).toBe("a");
    // });
    // test('212', () => {
    //     const board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]];
    //     const words = ["oath","pea","eat","rain"];
    //     const res: string[] = findWords(board, words);
    //     console.log(res); 
    //     // expect(res).toEqual(["oath", "eat"]);
        
    //     // const word = "hello";
    //     // console.log(convert(word));
    // })

    // test('contain', () => {
    //     const words = ["oath","pea","eat","rain"];
    //     const str = 'o';
    //     const res = ocontain(output(words), convert(str));
    //     console.log(res);
        
    // })


    // test('209', () => {
    //     const target = 7, nums = [2,3,1,2,4,3];
    //     minSubArrayLen(target, nums);
        
    // })

    test("2269", () => {
        divisorSubstrings(430043, 2)
    })


    test('2284', () => {
        const nums = [6,-1,7,4,2,3]
        const target = 8
        countPairs(nums, target)
    })
    
})