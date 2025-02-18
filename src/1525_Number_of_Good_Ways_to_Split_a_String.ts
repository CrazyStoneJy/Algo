function createList() {
    let list = []
    for (let i = 0; i < 26; i++) {
        list[i] = 0
    }
    return list
}

function count(list: number[]) {
    let c = 0
    for (let i = 0; i < list.length; i++) {
        if (list[i] > 0) {
            c++
        }
    }
    return c
}

function numSplits(s: string): number {
    let i = 0
    let res = 0

    let list = createList()
    let current = createList()
    
    for (i = 0; i < s.length; i++) {
        const index = (s[i].charCodeAt(0) - 'a'.charCodeAt(0))
        list[index] += 1
    }

    for (i = 0; i < s.length; i++) {
        const index = (s[i].charCodeAt(0) - 'a'.charCodeAt(0))
        current[index] += 1
        list[index] -= 1
        if (count(list) === count(current)) {
            res++
        }
    } 

    return res
};