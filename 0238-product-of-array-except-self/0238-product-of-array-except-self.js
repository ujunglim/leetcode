/**
 * @param {number[]} nums
 * @return {number[]}
 */
// ans[n] = left[n-1] * right[n+1]
var productExceptSelf = function(nums) {
    const ans = [nums[0]];
    let right = nums[nums.length-1];
    
    for(let i = 1; i < nums.length; i++) {
        ans[i] = ans[i-1] * nums[i];
    }
    // initial right side value
    ans[nums.length-1] = ans[nums.length-2];
    
    for(let j = nums.length-2; j > 0; j--) {
        ans[j] = ans[j-1] * right;
        right *= nums[j];
    }
    
    //
    ans[0] = right;
    return ans;
};
// =============== first try (map, reduce) =============
// var productExceptSelf = function(nums) {
//     const map = new Map();
//     const result = [];
//     for(let i = 0; i < nums.length; i++) {
//         map.set(i, nums[i]);
//     }

//     for(let i = 0; i < map.size; i++) {
//         const newMap = new Map(map);
//         newMap.delete(i);
//         const product = Array.from(newMap.values()).reduce((acc, prev) => acc * prev);
//         result.push(product);
//     }
//     return result;
// };