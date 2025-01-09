const sumByDivisible = (n: number, m: number) => {
    let sum = 0
    for (let i = 1; i <= n; i++) {
        if (i % m === 0) {
            sum += i
        }
    }
    return sum
}

function differenceOfSums(n: number, m: number): number {
    const a = sumByDivisible(n, m)
    console.log('a: ', a)
    const all = Array.from({ length: n + 1 }, (v, i) => i).reduce((prev, cur) => {
        return prev + cur
    })
    console.log('all sum: ', all)
    const b = all - a
    console.log('b: ', b)
    return b - a
};