/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
    let prev = nums[0];
    let max = 0;
    
    for(let i = 1; i < nums.length; i++) {
        if(nums[i-1] < nums[i]) { //
            prev += nums[i];
        }
        else {
            max = Math.max(max, prev);
            prev = nums[i];
        }
    }
    return Math.max(max, prev);
};