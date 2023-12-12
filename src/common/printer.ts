import { ListNode } from "./entity";
type Callback = (node: ListNode) => void;

export function printListNode(root: ListNode, callback?: Callback) {
    let head: ListNode = root;
    while (head != null) {
        callback && callback(head);
        head = head.next;
    }
}