/**
 * Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.
 * For example, given the following triangle
 * [
 * [2],
 * [3,4],
 * [6,5,7],
 * [4,1,8,3]
 * ]
 * The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).
 *
 * Note:
 * Bonus point if you are able to do this using only O(n) extra space, where n is the total number of rows in the triangle.
 */

/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  var len = triangle.length;
  var dp = [];
  for (var i = 0; i < len; i++) {
    dp[i] = [];
  }
  for (var j = 0; j < len; j++) {
    dp[len - 1][j] = triangle[len - 1][j];
  }

  for (var i = len - 2; i >= 0; i--) {
    for (var j = 0; j <= i; j++) {
      dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + triangle[i][j];
    }
  }

  return dp[0][0];
};

var triangle = [
  [2],
  [3, 4],
  [6, 5, 7],
  [4, 1, 8, 3]
];

console.log(minimumTotal(triangle));
