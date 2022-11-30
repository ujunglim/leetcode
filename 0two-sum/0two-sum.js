/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    
    for(let i = 0; i < nums.length; i++) {
        const curr = nums[i];
        
        if(map.has(target - curr)) {
            return [map.get(target - curr), i];
        }
        
        if(!map.has(curr)) {
            map.set(curr, i);
        }
    }
};