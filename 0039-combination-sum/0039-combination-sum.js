/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

// target초과하면 stop
// 중복 key로?
// 자기와 같은 수부터 순회
var combinationSum = function(candidates, target) {
    const answer = [];
    candidates.sort((a, b) => a - b); ///////////////////의미가 있나
    
    function bt(prevIndex, accArr) {
        // console.log(accArr, '----')
        const sum = accArr.reduce((acc, curr) => acc + curr, 0);
        if (sum === target) {
            answer.push(accArr);
            return; /////////////바로 빠져나갈 방법
        }
        
        for (let i = prevIndex; i < candidates.length; ++i) {
            const curr = candidates[i];
            const newSum = sum + curr;
            if (newSum > target) {
                break;
            }
            bt(i, [...accArr, curr]);
        }
    }
    bt(0, []);
    return answer;
};
