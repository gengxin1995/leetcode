/**
 * Given n items with size A , an integer m denotes the size of a backpack. How full you can fill this backpack?
 *
 * Example
 * If we have 4 items with size [2, 3, 5, 7] , the backpack size is 11, we can select [2, 3, 5] , so that the max size we can fill this backpack is 10 . If the backpack size is 12 . we can select [2, 3, 7] so that we can fulfill the backpack.
 * You function should return the max size we can fill in the given backpack.
 *
 * Note
 * You can not divide any item into small pieces.
 *
 * Challenge
 * O(n x m) time and O(m) memory.
 * O(n x m) memory is also acceptable if you do not know how to optimize memory
 * @param m
 * @param A
 * @returns {*}
 */
var backPack = function (m, A) {
  var len = A.length;
  var dp = [];

  //dp[i + 1][j] 为前 i 个物品中选出重量不超过 j 时总价值的最⼤值
  for (var i = 0; i <= len; i++) {
    dp[i] = [];
    for (var j = 0; j <= m; j++) {
      dp[i][j] = 0;
    }
  }

  for (var i = 0; i < len; i++) {
    for (var j = 0; j <= m; j++) {
      if (A[i] > j) {
        dp[i + 1][j] = dp[i][j];
      } else {
        dp[i + 1][j] = Math.max(dp[i][j], dp[i][j - A[i]] + A[i]);
      }
    }
  }

  return dp[len][m];
}

var A = [2, 7, 5, 3];
console.log(backPack(11, A));
