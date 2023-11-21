/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const answer = [];
    
    for (const n of nums1) {
        let indexOfNums2 = nums2.indexOf(n);
        if (indexOfNums2 === nums2.length-1) {
            answer.push(-1);
            continue;
        }
        let existGreater = false;
        while(indexOfNums2 < nums2.length) {
            indexOfNums2++;
            if (nums2[indexOfNums2] > n) {
                existGreater = true;
                answer.push(nums2[indexOfNums2]);
                break;
            }
        }
        if (!existGreater) {
            answer.push(-1);
        }
    }
    return answer;
};