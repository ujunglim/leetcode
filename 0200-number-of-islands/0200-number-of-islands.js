/**
 * @param {character[][]} grid
 * @return {number}
 */
// dfs
var numIslands = function(grid) {
    let answer = 0;
    const dir = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    
    function isInsideGrid(r, c) {
        return r >= 0 && r < grid.length && c >= 0 && c < grid[0].length;
    }
    function dfs(r, c) {
        for (const [dR, dC] of dir) {
            const nextR = r + dR;
            const nextC = c + dC;
            
            if (isInsideGrid(nextR, nextC) && grid[nextR][nextC] === "1") {
                grid[nextR][nextC] = "0";
                dfs(nextR, nextC);
            }
        }
    }
    
    for (let i = 0; i < grid.length; ++i) {
        for (let j = 0; j < grid[0].length; ++j) {
            if (grid[i][j] === "1") {
                answer++;
                dfs(i, j);
            }
        }
    }
    return answer;
};