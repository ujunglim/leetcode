/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  const answer = [];
  const arr = Array.from({length: 9}, (_, i) => i+1);

  function bt(sum, accArr, remainArr) {
    if (accArr.length === k) {
      if (sum === n) {
        answer.push(accArr);
      }
      return;
    }
    if (accArr.length > k) {
      return;
    }
    for (const num of remainArr) {
      bt(
        sum + num,
        [...accArr, num],
        remainArr.filter((r) => r > num)
      );
    }
  }
  bt(0, [], arr);
  return answer;
};
