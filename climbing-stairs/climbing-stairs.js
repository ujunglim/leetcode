/**
 * @param {number} n
 * @return {number}
 */
const dp = [1, 1];

var climbStairs = function(n) {
    if(dp[n]) return dp[n];
    else {
        dp[n] = climbStairs(n-2) + climbStairs(n-1);
        return dp[n];
    }
};