/**
 * @param {number} x
 * @return {number}
 */
// range of 32-bit interger [-2147483648 to 2147483647
// reverse x without sign, then check whether it is in valid range
var reverse = function (x) {
  let isMinus = x < 0;
  let reverse = 0;
  x = Math.abs(x);

  while (x) {
    reverse = reverse * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return reverse > Math.pow(2, 31) ? 0 : !isMinus ? reverse : -reverse;
};