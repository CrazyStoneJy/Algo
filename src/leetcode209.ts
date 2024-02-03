export function minSubArrayLen(target: number, nums: number[]): number {
    // const list: number[] = [];
    let left = 0, right = 0, sum = 0;
    let min = nums.length + 1;
    while (right < nums.length) {
        sum += nums[right++];
        while (sum >= target) {
            // move left
            min = Math.min(min, right - left);
            sum -= nums[left++];
        }
    }
    return min === nums.length + 1 ? 0 : min;
};