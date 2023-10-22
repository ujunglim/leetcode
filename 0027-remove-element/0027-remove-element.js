/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let needToBeReplacedIndex = 0; // which is val, from start of the arr
    let lastValidIndex = nums.length-1; // which is not val, from end of the arr
    
    while(needToBeReplacedIndex <= lastValidIndex) {
        if (nums[needToBeReplacedIndex] === val && nums[lastValidIndex] !== val) {
            nums[needToBeReplacedIndex] = nums[lastValidIndex];
            needToBeReplacedIndex++;
            lastValidIndex--;
            continue;
        }
        if (nums[needToBeReplacedIndex] !== val) {
            needToBeReplacedIndex++;
        }
        if (nums[lastValidIndex] === val) {
            lastValidIndex--;
        }
    }
    return lastValidIndex >= 0 ? lastValidIndex+1 : 0;
};