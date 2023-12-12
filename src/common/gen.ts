import { ListNode } from "./entity";

const FLAG_EMPTY_NODE = -1;

export function genListNode(eles: number[] | null) {
    if (!eles || eles.length === 0) {
        return new ListNode(FLAG_EMPTY_NODE);
    }
    const initListNode = new ListNode(FLAG_EMPTY_NODE);
    eles.map((val: number) => new ListNode(val))
        .reduce((pre: ListNode, cur: ListNode) => pre.next = cur, initListNode);
    return initListNode.next;
}

export function genTreeNode(arr: number[] | null) {
    
}