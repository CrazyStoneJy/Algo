import { genListNode } from "../src/common/gen";
import { printListNode } from "../src/common/printer";
import { ListNode } from "../src/common/entity";
import { mergeTwoLists } from "../src/list/leetcode21";

describe('linked list', () => {

    test('generate', () => {
        const arr = [1, 2, 3, 4];
        const root = genListNode(arr);
        printListNode(root);
        // console.log(root);
    });

    // test('21', () => {
    //     // list1 = [1,2,4], list2 = [1,3,4]
    //     const node1 = genListNode([1, 2, 4]);
    //     const node2 = genListNode([1, 3, 4]); 
    //     const newArr = [];
    //     const callback = (node: ListNode) => {
    //         // console.log(node.val);
    //         newArr.push(node.val);
    //     };
    //     printListNode(mergeTwoLists(node1, node2), callback);
    //     expect(newArr).toStrictEqual([1, 1, 2, 3, 4, 4]);
    // })

    // test("2269", () => {
    //     divisorSubstrings(430043, 2)
    // })

});