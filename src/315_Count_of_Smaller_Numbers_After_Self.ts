// timee complexity O(n^2)
function countSmaller(nums: number[]): number[] {
    let len = nums.length
    let res = Array.from({ length: len }, () => 0 )
    
    for (let i = len - 1; i >= 0; --i) {
        let count = 0;
        for (let j = i ; j < len; ++j) {
            if (nums[i] > nums[j]) {
                ++count;
            }
        }
        res[i] = count;
    }


    return res
};