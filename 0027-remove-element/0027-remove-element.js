/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let left = 0;
    let right = nums.length-1;
    
    while(left <= right) {
        // 교체당할 곳과 교체할 곳을 모두 찾으면 교체한다
        if (nums[left] === val && nums[right] !== val) {
            nums[left] = nums[right];
            left++; // 교체 후 이동
            right--;
        } else {
            if (nums[left] !== val) {
                left++;
            }
            if (nums[right] === val) {
                right--;
            }
        }
    }
    return right+1; 
};