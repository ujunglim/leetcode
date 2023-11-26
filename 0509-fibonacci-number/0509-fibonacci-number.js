/**
 * @param {number} n
 * @return {number}
 */
// var fib = function(n) {
//     const dp = [0, 1];
//     if (dp[n]) {
//         return dp[n];
//     }
//     for (let i = 2; i <= n; ++i) {
//         dp[i] = dp[i-2] + dp[i-1];
//     }
//     return dp[n];
// };

var fib = function(n) {
    const dp = [0, 1];
    function recursive(i) {
        if (i < 0) {
            return 0;
        }
        if (dp[i]) {
            return dp[i];
        }
        dp[i] = recursive(i-2) + recursive(i-1);
        return dp[i];
    }
    return recursive(n);
};