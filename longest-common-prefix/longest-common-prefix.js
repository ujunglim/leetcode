/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let ans = "";
  for (let c = 0; c < strs[0].length; c++) {
    const curr = strs[0][c];
    let count = 1;
    for (let word = 1; word < strs.length; word++) {
      if (strs[word][c] === curr) {
        count++;
      } else {
        return ans;
      }
    }
    if (count === strs.length) {
      ans += curr;
    }
  }
  return ans;
};