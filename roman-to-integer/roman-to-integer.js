/**
 * @param {string} s
 * @return {number}
 */
// ====================
// 1000, -100, 1000
var romanToInt = function (s) {
  const arr = s.split("");
  let sum = 0;

  const symbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  for (let i = 0; i < arr.length; i++) {
    symbols[arr[i]] < symbols[arr[i + 1]]
      ? (sum -= symbols[arr[i]])
      : (sum += symbols[arr[i]]);
  }
  return sum;
};
// ====================
// var romanToInt = function (s) {
//   const arr = s.split("");
//   let sum = 0;

//   const obj = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000
//   };

//   for (let i = 0; i < arr.length; i++) {
//     if (obj[arr[i]] < obj[arr[i + 1]]) {
//       sum += obj[arr[i + 1]] - obj[arr[i]];
//       i++;
//     } else {
//       sum += obj[arr[i]];
//     }
//   }
//   return sum;
// };