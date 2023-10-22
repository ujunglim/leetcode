/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i = 0;
    for (const num of nums) {
        // val가 아닌 수를 찾으면
        if (num !== val) {
            nums[i] = num; // val가 아니면 원래 값 그대로 유지
            i++;
        }
    }
    return i;
};