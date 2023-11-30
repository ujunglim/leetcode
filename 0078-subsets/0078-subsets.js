/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 1이 선택이 된 경우 선택이 되지 않은 경우 2^3 = 8
var subsets = function(nums) {
    const answer = [];
    
    function bt(index, letter) {
        if (index === nums.length) {
            answer.push(letter);
            return;
        }
        const char = nums[index];
        bt(index+1, letter); // 선택 안 된
        bt(index+1, [...letter, char]); // 선택 된
    }
    
    bt(0, []);
    return answer;
};
