/**
 * @param {string} s
 * @return {number}
 */

// without reapeat (hash)
// continue, series (queue)
var lengthOfLongestSubstring = function (s) {
  let queue = [];
  const map = {};
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    const curr = s[i];
    // no repeat
    if (!map[curr]) {
      map[curr] = true;
      queue.push(curr);
      max = Math.max(max, queue.length); // max++
    } else {
      // when repeat, dequeue elements from 0 to repeated element
      const prevIdx = queue.indexOf(curr);
      // queue.splice(prevIdx + 1);
      for (let i = 0; i <= prevIdx; i++) {
        queue.shift();
      }
      queue.push(curr);
      max = Math.max(max, queue.length);
    }
  }
  return max;
};
// ============================================
// var lengthOfLongestSubstring = function (s) {
//   if (s.length === 0) return 0;
//   if (s.length === 1) return 1;

//   let str = s[0]; // 
//   let maxs = [];

//   for (let i = 0; i < s.length; i++) {
//     for (let j = i + 1; j < s.length; j++) {
//       // repeated
//       if (!s.slice(i, j).includes(s[j])) {
//         str = s.slice(i, j + 1);
//       } else {
//         maxs.push(str.length);
//         str = "";
//         break;
//       }
//     }
//     if (str) maxs.push(str.length);
//   }
//   console.log(Math.max(...maxs));
//   return Math.max(...maxs);
// };