/**
 * @param {number[]} nums
 * @return {number}
 */
// -10^4 <= nums[i] <= 10^4 -Number.MAX_VALUE
var maxSubArray = function(nums) {
    let localMax = 0;
    let globalMax = -Number.MAX_VALUE;
    
    for(let i = 0; i < nums.length; i++) {
        localMax = Math.max(localMax + nums[i], nums[i]);
        globalMax = Math.max(localMax, globalMax);
    }
    return globalMax;
};