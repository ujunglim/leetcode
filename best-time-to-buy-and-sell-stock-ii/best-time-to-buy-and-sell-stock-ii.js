/**
 * @param {number[]} prices
 * @return {number}
 */
// points of interest are the consecutive valleys and peaks
var maxProfit = function(prices) {
    let max = 0;
    let valleyIdx = 0;
    let peakIdx = 0;
    let i = 0;
    
    while(i < prices.length - 1) {
        // find valley;
        while(prices[i] >= prices[i+1] && i < prices.length - 1) {
            i++;
        } 
        valleyIdx = i;
        
        while(prices[i] <= prices[i+1] && i < prices.length - 1) {
            i++;
        }
        peakIdx = i;
        
        max += prices[peakIdx] - prices[valleyIdx];
    }
    return max;
};