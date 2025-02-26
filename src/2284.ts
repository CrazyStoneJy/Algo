function countPairs(nums: number[], target: number): number {
    nums.sort((a, b) => a - b)
    let c = 0

    let left = 0, right = 1
    for (; left < nums.length ;) {
        const l = nums[left]
        const r = nums[right]
        if (l + r < target) {
            ++right
            ++c
        } else {
            ++left
            right = left + 1
        }
    }

    return c
};


export {
    countPairs
}