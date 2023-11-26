/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    if (cost.length === 2) {
        return Math.min(cost[0], cost[1]);
    }
    const dp = [cost[0], cost[1]];
    
    for(let i = 2; i < cost.length; ++i) {
        dp[i] = Math.min(dp[i-2], dp[i-1]) + cost[i];
    }
    return Math.min(dp[dp.length-2], dp[dp.length-1]);
};