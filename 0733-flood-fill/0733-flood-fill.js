/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
// bfs. when found target, change image[i][j] directly
var floodFill = function(image, sr, sc, color) {
    const firstColor = image[sr][sc];
    const row = image.length;
    const col = image[0].length;
    const isVisited = new Array(row).fill(false).map(_ => new Array(col).fill(false));
    isVisited[sr][sc] = true;
    dx = [0, 1, 0, -1];
    dy = [-1, 0, 1, 0];
    
    function isValid(i, j) {
        return i >= 0 && i < row && j >= 0 && j < col;
    }
    
    function checkNeighbor(i, j) {
        const queue = [];
        queue.push([i, j]);
        
        while(queue.length) {
            const [currI, currJ] = queue.shift();
            
            for(let d = 0; d < 4; d++) {
                const neighborI = currI + dx[d];            
                const neighborJ = currJ + dy[d];

                if(isValid(neighborI, neighborJ) && 
                   !isVisited[neighborI][neighborJ] && 
                   image[neighborI][neighborJ] === firstColor) {
                    queue.push([neighborI, neighborJ]);
                    isVisited[neighborI][neighborJ] = true;
                    image[neighborI][neighborJ] = color;
                }
            }
        }
        
    }
    
    
    if(firstColor !== color) {
        image[sr][sc] = color;
        checkNeighbor(sr, sc);
    }
    return image;
};