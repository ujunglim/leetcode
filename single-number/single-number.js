/**
 * @param {number[]} nums
 * @return {number}
 */
// for(const [key, value] of map.entries())
var singleNumber = function(nums) {
    const map = new Map();
    
    for(let i = 0; i < nums.length; i++) {
        const curr = nums[i];
        map.set(curr, !map.has(curr) ? 1 : map.get(curr)+1);
    }
    
    for(const [key, value] of map.entries()) {
        if(value === 1) {
            return key;
        }
    }
};