/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const dp = [];
    
    for (let i = 0; i < numRows; i++) {
        dp[i] = new Array(i+1).fill(0);
        dp[i][0] = 1; // 한 행의 첫번째는 1
        dp[i][i] = 1; // 한 행의 마지막은 1
    }
    for (let r = 2; r < numRows; r++) {
        for (let c = 1; c < r; c++) {
            dp[r][c] = dp[r-1][c-1] + dp[r-1][c];
        }
    }
    return dp;
};