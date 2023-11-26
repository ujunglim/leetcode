/**
 * @param {number[]} cost
 * @return {number}
 */
// iteration
// var minCostClimbingStairs = function(cost) {
//     if (cost.length === 2) {
//         return Math.min(cost[0], cost[1]);
//     }
//     const dp = [cost[0], cost[1]];
//     for(let i = 2; i < cost.length; ++i) {
//         dp[i] = Math.min(dp[i-2], dp[i-1]) + cost[i];
//     }
//     return Math.min(dp[dp.length-2], dp[dp.length-1]);
// };

// recursive
var minCostClimbingStairs = function(cost) {
    const dp = [cost[0], cost[1]];
    const len = cost.length;
    
    function getMinCost(i) {
        if (i < 0) {
            return 0;
        }
        if(dp[i]) {
            return dp[i];
        } else {
            dp[i] = Math.min(getMinCost(i-2), getMinCost(i-1)) + (cost[i] || 0);
            return dp[i];
        }
    }
    return getMinCost(len);
    
};