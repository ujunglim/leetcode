/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = Infinity;
    let max = -Infinity;
    
    for (const price of prices) {
        min = Math.min(min, price);
        max = Math.max(max, price-min);
    }
    return max;
};
// 최소 = Min(전의 최소, 현재)
// 최대 = Max(전의 최대, 현재 - 최소)





// var maxProfit = function(prices) {
//     let min = prices[0];
//     let max = 0;
    
//     for(let i = 1; i < prices.length; i++) {
//         min = Math.min(prices[i], min);
//         max = Math.max(max, prices[i]-min);
//     }
//     return max;
// };