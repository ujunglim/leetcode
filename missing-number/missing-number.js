/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    const expectedSum = (nums.length*(nums.length + 1)) / 2;
    const sum = nums.reduce((acc, prev) => acc + prev);
    return expectedSum - sum;
};
// var missingNumber = function (nums) {
//   const set = new Set(nums);
//   for (let num = 0; num <= nums.length; num++) {
//     if (!set.has(num)) {
//       return num;
//     }
//   }
// };
// var missingNumber = function (nums) {
//   for (let i = 0; i <= nums.length; i++) {
//     if (!nums.includes(i)) return i;
//   }
// };