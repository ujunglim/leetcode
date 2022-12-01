/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// sorted binary search
var search = function(nums, target) {
    let i = 0;
    let j = nums.length - 1;
    
    while(i <= j) {
        let pivot = Math.floor((i + j) / 2);
        
        if(nums[pivot] === target) return pivot;
        if(nums[pivot] < target) {
            i = pivot + 1;
        }
        else if (nums[pivot] > target) {
            j = pivot - 1;
        }
    }
    return -1;
};