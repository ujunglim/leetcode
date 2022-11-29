/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const map = new Map();

    for(let i = 0; i < nums.length; i++) {
        const curr = nums[i];
        if(map.has(curr) && Math.abs(map.get(curr) - i) <= k) {
            return true;
        }
        map.set(curr, i);
    }
    return false;
};