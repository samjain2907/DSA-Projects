function isSafe(board, r, c, i) {}

function solveSudokuHelper(board, r, c) {
  //base case
  if (r === 9) {
    changeboard();
    return true;
  }
  //other cases
  if (c === 9) {
    return solveSudokuHelper(board, r + 1, 0);
  }
  //pre filled cell, so skip it
  if (board[r][c] != 0) {
    return solveSudokuHelper(board, r, c + 1);
  }
  // there is 0 in the current location
  for (var i = 0; i <= 9; i++) {
    if (isSafe(board, r, c, i)) {
      board[r][c] = i;
      var success = solveSudokuHelper(board, r, c + 1);
      if (success == true) {
        return true;
      }
      board[r][c] = 0;
    }
  }
  return false;
}

function solveSudoku(board) {
  solvesudokuHelper(board, 0, 0);
}
