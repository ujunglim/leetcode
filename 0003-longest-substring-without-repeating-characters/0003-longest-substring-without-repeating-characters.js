/**
 * @param {string} s
 * @return {number}
 */
// compare value by two pointers i, j.
// If the values are same, then record the max length of substring into maxs[]
// 0 <= s.length
var lengthOfLongestSubstring = function (s) {
  if (s.length === 0) return 0;
  if (s.length === 1) return 1;

  let str = s[0]; // 
  let maxs = [];

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      // repeated
      if (!s.slice(i, j).includes(s[j])) {
        str = s.slice(i, j + 1);
      } else {
        maxs.push(str.length);
        str = "";
        break;
      }
    }
    if (str) maxs.push(str.length);
  }
  console.log(Math.max(...maxs));
  return Math.max(...maxs);
};