/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 순서 상관없이 선택이 된 경우 안 된 경우
var subsets = function(nums) {
    const answer = [];
    const len = nums.length;
    
    function bt(index, accArr) {
        if (index === len) {
            answer.push(accArr);
            return;
        }
        bt(index+1, [...accArr]);
        bt(index+1, [...accArr, nums[index]]);

    }
    bt(0, []);
    return answer;
};