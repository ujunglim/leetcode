/**
 * @param {number[]} nums
 * @return {number}
 */
// slice doesn't modify original
// splice(start, deleteCount)
var removeDuplicates = function(nums) {
    for(let i = nums.length - 1; i > 0; i--) {
        if(nums[i] === nums[i - 1]) {
            nums.splice(i, 1); 
        }
    }
    return nums.length;
};