/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let total = 0;
    const row = grid.length;
    const col = grid[0].length;
    dx = [0, 1, 0, -1];
    dy = [-1, 0, 1, 0];
    
    function isValid(i, j) {
        return i >= 0 && i < row && j >= 0 && j < col;
    }
    
    function getEdges(i, j) {
        let edge = 0;
        
        for(let d = 0; d < 4; d++) {
            const neighborI = i + dx[d];
            const neighborJ = j + dy[d];
            
            if(!isValid(neighborI, neighborJ) || grid[neighborI][neighborJ] === 0) {
                edge++;
            }
        }
        return edge;
    }
    
    for(let i = 0; i < row; i++) {
        for(let j = 0; j < col; j++) {
            if(grid[i][j] === 1) {
                total += getEdges(i, j);
            }
        }
    }
    
    return total;
};