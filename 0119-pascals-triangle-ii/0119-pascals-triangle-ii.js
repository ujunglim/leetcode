/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    const dp = [];
    if (rowIndex === 0) {
        return [1];
    }
    
    for (let i = 0; i <= rowIndex; i++) {
        dp[i] = new Array(i+1).fill(0);
        dp[i][0] = 1;
        dp[i][i] = 1;
    }
    
    for (let r = 2; r <= rowIndex; r++) {
        for (let c = 1; c < r; c++) {
            dp[r][c] = dp[r-1][c-1] + dp[r-1][c];
        }
    }
    
    return dp[rowIndex];
};