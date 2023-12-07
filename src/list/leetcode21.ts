import { ListNode } from "../common/types";

export function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let cur1 = list1;
    let cur2 = list2;
    let newNode = new ListNode();
    let cur = newNode;
    while (cur1 != null && cur2 != null) {
        if (cur1.val <= cur2.val) {
            cur.next = cur1;
            cur1 = cur1.next;
            cur = cur.next;
        } else {
            cur.next = cur2;
            cur2 = cur2.next;
            cur = cur.next;
        }
    }

    // bad case for cur1
    if (cur1 != null) {
        cur.next = cur1;
    }

    // bad case for cur2
    if (cur2 != null) {
        cur.next = cur2;
    }

    return newNode.next;
};