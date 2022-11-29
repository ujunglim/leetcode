/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    for(let i = 0; i < nums.length; i++) {
        const curr = nums[i];
        for(let j = i-k; j <= i+k; j++) {
            // j should be valid index, also i != j
            if(j >= 0 && j < nums.length && i !== j) {
                if(nums[j] === curr) return true;
            }
        }
    }
    return false;
};