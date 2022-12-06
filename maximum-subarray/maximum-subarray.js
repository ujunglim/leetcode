/**
 * @param {number[]} nums
 * @return {number}
 */
// [-2,1,-3,4,-1,2,1,-5,4]
var maxSubArray = function(nums) {
    let solution = nums[0];
    
    for(let i = 1; i < nums.length; i++) {
        nums[i] = Math.max(nums[i], nums[i] + nums[i-1]); // 
        solution = Math.max(solution, nums[i]);
    }
    return solution;
};
// ============================
// -10^4 <= nums[i] <= 10^4 -Number.MAX_VALUE
// var maxSubArray = function(nums) {
//     let localMax = 0;
//     let globalMax = -Number.MAX_VALUE;
    
//     for(let i = 0; i < nums.length; i++) {
//         localMax = Math.max(localMax + nums[i], nums[i]);
//         globalMax = Math.max(localMax, globalMax);
//     }
//     return globalMax;
// };