function rotate(nums: number[], k: number): void {
    let offset = k % nums.length;
    move(nums, offset);
};

function move(nums: number[], offset: number) {
    const arr: number[] = [];

    let index = nums.length - 1;
    let n = offset;
    while(n > 0) {
        arr.splice(0, 0, nums[index--]);
        n--;
    }
    // console.log(arr);

    const start = nums.length - 1 - offset;
    for (let i = start; i >= 0; i--) {
        nums[i + offset] = nums[i];
        // console.log(i + offset, i);
    }

    // console.log(nums);

    let i = 0;
    while (i < offset) {
        nums[i] = arr[i];
        i++;
    }
}