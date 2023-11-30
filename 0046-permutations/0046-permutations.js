/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// n개 전부 선택하는데 순서가 다름
var permute = function(nums) {
    const answer = [];
    const len = nums.length;
    
    function bt(accArr, remainArr) {
        if (remainArr.length === 0) {
            answer.push(accArr);
            return;
        }
        
        for (let i = 0; i < remainArr.length; ++i) {
            const curr = remainArr[i];
            bt([...accArr, curr], remainArr.filter(r => r !== remainArr[i]));
        }
    }
    
    bt([], nums);
    return answer;
};