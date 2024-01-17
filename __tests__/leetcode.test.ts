import { convert, findWords, ocontain, output } from "../src/leetcode212";
import { longestPalindrome } from "../src/leetcode5";

describe('leetcode', () => {
    test('5', () => {
        const s = "ac";
        const res = longestPalindrome(s);
        expect(res).toBe("a");
    });
    test('212', () => {
        const board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]];
        const words = ["oath","pea","eat","rain"];
        const res: string[] = findWords(board, words);
        console.log(res); 
        // expect(res).toEqual(["oath", "eat"]);
        
        // const word = "hello";
        // console.log(convert(word));
    })

    test('contain', () => {
        const words = ["oath","pea","eat","rain"];
        const str = 'o';
        const res = ocontain(output(words), convert(str));
        console.log(res);
        
    })


    
})