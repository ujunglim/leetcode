/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
// ========== 확인하지 않고 bt에 넣음 코드깔끔 ============
var exist = function(board, word) {
    const maxR = board.length;
    const maxC = board[0].length;
    const dir = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    
    for (let r = 0; r < maxR; ++r) {
        for (let c = 0; c < maxC; ++c) {
            if (findWord(r, c, 0)) {
                return true;
            }
        }
    }
        
    function findWord(r, c, i) {
        if (board[r][c] !== word[i]) return false;
        if (i === word.length-1) return true;
        
        board[r][c] = null; ////////////////////// mark as visited 
        
        for (const [dr, dc] of dir) {
            const nextR = r+ dr;
            const nextC = c+dc;
            if (nextR >= 0 && nextR < maxR && nextC >= 0 && nextC < maxC) {
                if (findWord(nextR, nextC, i+1)) {
                    return true;
                }
            }
        }
        board[r][c] = word[i] /////////////////// reset
        return false;
    }
    
    return false;
};
// ============ 내 방법 성공 넣기전에 첫번째 문자가 맞는지 확인하고 넣었음 ===================
// // 왔던 길은 다시 방문할 수 없다.
// var exist = function(board, word) {
//     const maxRow = board.length;
//     const maxCol = board[0].length;
//     const dir = [[-1, 0], [0, 1], [1, 0], [0, -1]];
//     let found = false;
    
//     for (let r = 0; r < board.length; ++r) {
//         for (let c = 0; c < board[0].length; ++c) {
//             if (board[r][c] === word[0]) {
//                 const newBoard = board.map(b => [...b]);
//                 newBoard[r][c] = null;
//                 findWord(r, c, 1, newBoard);
//             }
//         }
//     }
    
//     function findWord(currR, currC, index, board) {
//         if (index === word.length) {
//             found = true;
//             return;
//         }
        
//         for(const [dr, dc] of dir) {
//             const nextR = currR + dr;
//             const nextC = currC + dc;
//             if (isInside(nextR, nextC, maxRow, maxCol) && board[nextR][nextC] && board[nextR][nextC] === word[index]) {
//                 const newBoard = board.map(b => [...b]);
//                 newBoard[nextR][nextC] = null;
//                 findWord(nextR, nextC, index+1, newBoard);
//             }
//         }
//     }
    
//     return found;
// };
        
// function isInside(r, c, maxR, maxC) {
//  return r >= 0 && r < maxR && c >= 0 && c < maxC;  
// }