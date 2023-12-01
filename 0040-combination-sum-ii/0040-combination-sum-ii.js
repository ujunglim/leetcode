/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// 한번만 사용가능
// 중복조합 피하기
var combinationSum2 = function (candidates, target) {
  const answer = [];
  candidates.sort((a, b) => a - b);

  function bt(prevIndex, arr) {
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    if (sum > target) return;

    if (sum === target) {
      answer.push(arr);
      return;
    }

    for (let i = prevIndex; i < candidates.length; ++i) {
        if (i != prevIndex && candidates[i] == candidates[i-1]) continue;
        bt(i + 1, [...arr, candidates[i]]);
    }
  }

  bt(0, []);
  return answer;
};
