/**
 * Given n items with size Ai and value Vi, and a backpack with size m. What's the maximum value can you put into the backpack?
 *
 * Example
 * Given 4 items with size [2, 3, 5, 7] and value [1, 5, 2, 4] , and a backpack with size 10 . The maximum value is 9 .
 *
 * Note
 * You cannot divide item into small pieces and the total size of items you choose should smaller or equal to m.
 *
 * Challenge
 * O(n x m) memory is acceptable, can you do it in O(m) memory?
 * @param m
 * @param A
 * @param V
 * @returns {*}
 */
var backpack2 = function (m, A, V) {
  var n = A.length;
  var dp = [];
  for (var i = 0; i <= n; i++) {
    dp[i] = [];
    for (var j = 0; j <=m; j++) {
      dp[i][j] = 0;
    }
  }

  for (var i = 0; i < n; i++) {
    for (var j = 0; j <= m; j++) {
      if (A[i] > j) {
        dp[i + 1][j] = dp[i][j];
      } else {
        dp[i + 1][j] = Math.max(dp[i][j], dp[i][j - A[i]] + V[i]);
      }
    }
  }

  return dp[n][m];
};

var A = [2, 3, 5, 7],
  V = [1, 5, 2, 4];
console.log(backpack2(10, A, V));
