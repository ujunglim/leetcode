/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// treat zero as empty space, then move nums by count of empty spaces
var moveZeroes = function(nums) {
    let count = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 0) count++;
        else if(count) {
            nums[i-count] = nums[i];
            nums[i] = 0;
        }
    }
    return nums;
};