/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const ans = [];
  for (let i = 0; i < nums1.length; i++) {
    const curr = nums1[i];
    if (nums2.includes(curr)) {
      ans.push(curr);
      nums1.splice(i, 1);
      nums2.splice(nums2.indexOf(curr), 1);
      i--;
    }
  }
  return ans;
};