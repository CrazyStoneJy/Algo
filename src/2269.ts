// Find the K-Beauty of a Number


function digit(num: number) {
    let count = 0
    while (num > 1) {
        num /= 10
        ++count
    }
    return count
}

// FIXME
function divisorSubstrings(num: number, k: number): number {
    let list = []
    let len = digit(num)
    let step = Math.pow(10, k)
    for (let i = 0; i < len - 2; i++) {
        let n = Math.floor(num / (step * Math.pow(10, i)))
        list.push(n)
    }
    let res = 0
    for (let i = 0; i < list.length; i++) {
        if (num % list[i] === 0) {
            res++
        }
    }
    return res
};


export {
    divisorSubstrings
}