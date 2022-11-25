/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const secondNum = target - nums[i];

    if (map.has(secondNum)) {
      return [i, map.get(secondNum)];
    } else {
      map.set(nums[i], i);
    }
  }
  return null;
};

// =========================================
// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length - 1; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) return [i, j];
//     }
//   }
//   return null;
// };