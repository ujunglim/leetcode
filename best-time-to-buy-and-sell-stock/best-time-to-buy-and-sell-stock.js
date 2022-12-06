/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let min = prices[0];
  let max = 0;

  for (let i = 1; i < prices.length; i++) {
    const curr = prices[i];
    min = Math.min(min, curr); // find min
    max = Math.max(max, curr - min); // fidn maxProfit
  }
  return max;
};