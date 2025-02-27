import { ListNode } from "./common/entity"


function parse(l1: ListNode | null): string {
    if (l1.next === null) {
        return l1.val + ""
    }
    return l1.val + parse(l1.next) 
}

function add(s1: string, s2: string): string {
    let remain = 0
    let i = 0, j = 0
    let sum = ""
    while (i < s1.length && j < s2.length) {
        let val = parseInt(s1[i], 10) + parseInt(s2[j], 10) + remain
        remain = Math.floor(val / 10)
        sum = sum + (val % 10)
        ++i
        ++j
    }
    // remain s1
    while (i < s1.length) {
        let val = parseInt(s1[i], 10) + remain
        remain = Math.floor(val / 10)
        sum = sum + (val % 10)
        ++i
    }
    // remain s2
    while (j < s2.length) {
        let val = parseInt(s2[j], 10) + remain
        remain = Math.floor(val / 10)
        sum = sum + (val % 10)
        ++j
    }
    if (remain !== 0) {
        sum += remain
    }
    return sum
}

function format(s: string): ListNode | null {
    let dumb = new ListNode()
    let head = dumb
    let i = 0
    while (i < s.length) {
        head.next = new ListNode(parseInt(s.substring(i, i + 1), 10))
        head = head.next
        ++i
    }

    return dumb.next
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if (l1 === null) {
        return l2
    }
    if (l2 === null) {
        return l1
    }
    let dumb = new ListNode(0)
    const str1 = parse(l1)
    const str2 = parse(l2)
    const str = add(str1, str2)
    
    // console.log("str: " + str)
    return format(str)
};


export {
    addTwoNumbers
}