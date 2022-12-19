/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const arr = s.split("");
  let sum = 0;

  const obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] < obj[arr[i + 1]]) {
      sum += obj[arr[i + 1]] - obj[arr[i]];
      i++;
    } else {
      sum += obj[arr[i]];
    }
  }
  return sum;
};