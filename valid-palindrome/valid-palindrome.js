/**
 * @param {string} s
 * @return {boolean}
 */
// string.toLowerCase / array.split.filter / /^[a-zA-Z]$/.test()
// Alphanumeric characters include letters and numbers. (case "0P")
var isPalindrome = function (s) {
  const newS = s
    .toLowerCase()
    .split("")
    .filter((e) => /^[a-zA-Z0-9]$/.test(e));

  let left = 0;
  let right = newS.length - 1;

  while (left < right) {
    if (newS[left] !== newS[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};