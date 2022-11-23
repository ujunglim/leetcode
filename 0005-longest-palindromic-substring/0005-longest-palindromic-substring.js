/**
 * @param {string} s
 * @return {string}
 */
function isPalindromic(A, p1, p2) {
  while (p1 < p2) {
    if (A[p1] !== A[p2]) {
      return false;
    }
    p1++;
    p2--;
  }
  return true;
}

var longestPalindrome = function (s) {
  // find from long length
  for (let diff = s.length - 1; diff >= 0; diff--) {
    let subStringCount = s.length - diff;

    for (let p1 = 0; p1 < subStringCount; p1++) {
      const p2 = p1 + diff;
      // console.log(p1, p2);

      if (isPalindromic(s, p1, p2)) return s.substring(p1, p2 + 1);
    }
  }
};