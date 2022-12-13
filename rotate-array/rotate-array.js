/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// nums = [1,2,3,4,5,6,7], k = 3
// [5,6,7,1,2,3,4]
var rotate = function (nums, k) {
    k = k % nums.length;
    
    // reverse all
    reverse(0, nums.length-1);
    // reverse first part
    reverse(0, k-1);
    // reverse second part
    reverse(k, nums.length-1);
    
    function reverse(i, j) {
        while(i < j) {
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            i++;
            j--;
        }
    }
};