function isBalanced(num: string): boolean {
    let odd = 0, even = 0
    for (let i = 0; i < num.length; i++) {
        if (i % 2 === 0) {
            even += parseInt(num[i], 10)
        } else {
            odd += parseInt(num[i], 10)
        }
    }
    return odd === even
};