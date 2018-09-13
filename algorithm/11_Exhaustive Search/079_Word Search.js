/**
 * Given a 2D board and a word, find if the word exists in the grid.
 * The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.
 *
 * Example:
 * board =
 * [
 * ['A','B','C','E'],
 * ['S','F','C','S'],
 * ['A','D','E','E']
 * ]
 * Given word = "ABCCED", return true.
 * Given word = "SEE", return true.
 * Given word = "ABCB", return false.
 */

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  var m = board.length;
  var n = board[0].length;
  var visited = [];
  for (var i = 0; i < m; i++) {
    visited[i] = [];
  }

  for (var i = 0; i < m; i++) {
    for (var j = 0; j < n; j++) {
      if (dfs(board, word, 0, i, j, visited)) {
        return true;
      }
    }
  }
  return false;
};

function dfs(board, word, index, x, y, visited) {
  if (index === word.length) {
    return true;
  }

  if (x < 0 || y < 0 || x >= board.length || y >= board[0].length) {
    return false;
  }

  if (visited[x][y]) {
    return false;
  }

  if (board[x][y] !== word[index]) {
    return false;
  }

  visited[x][y] = true;

  var res = dfs(board, word, index + 1, x + 1, y, visited) ||
    dfs(board, word, index + 1, x, y + 1, visited) ||
    dfs(board, word, index + 1, x - 1, y, visited) ||
    dfs(board, word, index + 1, x, y - 1, visited);
  visited[x][y] = false;

  return res;
}

var board = [['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']];
var word = "ABCB";
console.log(exist(board, word));
