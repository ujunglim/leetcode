/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    let curr = digits[i] + 1;

    if (curr <= 9) {
      digits[i] = curr;
      return digits; // if don't have carry-over return
    } else {
      digits[i] = 0; // has carry-over 1
    }
  }

  digits.unshift(1);
  return digits;
};
// ============================
// string => Number 로 변환할때 16이상 자리 숫자는 안 처리가 안된다.
// var plusOne = function (digits) {
//   const firstDigit = digits[digits.length - 1];
//   let crossNum = 0;

//   if (firstDigit + 1 === 10) {
//     digits[digits.length - 1] = 0;
//     crossNum = 1;
//   } else {
//     digits[digits.length - 1] = firstDigit + 1;
//   }
//   // iterate digits from second digit
//   for (let i = digits.length - 2; i >= 0; i--) {
//     let curr = digits[i] + crossNum;

//     if (curr <= 9) {
//       digits[i] = curr;
//       crossNum = 0;
//     } else {
//       digits[i] = 0;
//       crossNum = 1;
//     }
//   }

//   if (crossNum === 1) {
//     digits.unshift(crossNum);
//   }
//   return digits;
// };