/**
 * Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.
 *
 * Example:
 * Input:
 * 1 0 1 0 0
 * 1 0 1 1 1
 * 1 1 1 1 1
 * 1 0 0 1 0
 * Output: 4
 */

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  var side = 0;
  if (matrix === null || matrix.length === 0 || matrix[0].length === 0) {
    return side;
  }
  var m = matrix.length, n = matrix[0].length;
  var dp = Array.from(Array(m)).map(() => Array(n).fill(0));

  for (var i = 0; i < m; i++) {
    for (var j = 0; j < n; j++) {
      if (matrix[i][j] === '1') {
        dp[i][j] = 1 + Math.min(i && j ? dp[i - 1][j - 1] : 0, j ? dp[i][j - 1] : 0, i ?dp[i - 1][j] : 0);
        side = Math.max(side, dp[i][j]);
      }
    }
  }

  return side * side;
};
