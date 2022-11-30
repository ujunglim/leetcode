/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
    let sum = nums[0];
    let max = 0;
    
    for(let i = 1; i < nums.length; i++) {
        if(nums[i-1] < nums[i]) { //
            sum += nums[i];
        }
        else {
            // update max, sum
            max = Math.max(max, sum);
            sum = nums[i];
        }
    }
    return Math.max(max, sum);
};