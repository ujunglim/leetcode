/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  const isPrime = new Array(n).fill(true);
  let count = 0;

  for (let num = 2; num < n; num++) {
    // found prime
    if (isPrime[num]) {
      count++;
      // remove all multiples of prime 소수의 배수 모두 삭제하기
      for (let multiple = 2 * num; multiple < n; multiple += num) {
        isPrime[multiple] = false;
      }
    } else {
      continue;
    }
  }
  return count;
};