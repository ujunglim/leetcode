/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if(n < 1) return false;
    
    while(n % 3 === 0) {
        n /= 3;
    }
    return n === 1;
};
// // case: -3, 1
// var isPowerOfThree = function (n) {
//   if (n === 1) return true;
//   if (n <= 0) return false;
//   // when time <= 1
//   if (Math.abs(n / 3) <= 1) {
//     if (n % 3 === 0) return true;
//     return false;
//   } else {
//     return isPowerOfThree(n / 3);
//   }
// };