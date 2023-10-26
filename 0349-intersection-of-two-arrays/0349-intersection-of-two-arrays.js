/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const set = new Set();
    
    for (const n of nums1) {
        if (nums2.includes(n) && !set.has(n)) {
            set.add(n);
        }
    }
    return [...set];
};