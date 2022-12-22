/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  for (let i = 0; i < 9; i++) {
    const rowSet = new Set();
    const colSet = new Set();
    const boxSet = new Set(); // 3*3

    for (let j = 0; j < 9; j++) {
      const rowCurr = board[i][j];
      const colCurr = board[j][i];
      const box =
        board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)];

      if (rowCurr !== ".") {
        if (rowSet.has(rowCurr)) {
          return false;
        }
        rowSet.add(rowCurr);
      }

      if (colCurr !== ".") {
        if (colSet.has(colCurr)) {
          return false;
        }
        colSet.add(colCurr);
      }

      if (box !== ".") {
        if (boxSet.has(box)) {
          return false;
        }
        boxSet.add(box);
      }
    }
  }
  return true;
};