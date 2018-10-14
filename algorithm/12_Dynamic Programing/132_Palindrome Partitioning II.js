/**
 * Given a string s, partition s such that every substring of the partition is a palindrome.
 * Return the minimum cuts needed for a palindrome partitioning of s.
 *
 * Example:
 * Input: "aab"
 * Output: 1
 * Explanation: The palindrome partitioning ["aa","b"] could be produced using 1 cut.
 */

/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
  if (s === null || s.length === 0) return 0;

  var len = s.length;
  var cut = [];
  for (var i = 0; i <= len; i++) {
    cut[i] = i - 1;
  }

  var mat = paMat(s);

  for (var i = 1; i <= len; i++) {
    for (var j = 0; j < i; j++) {
      if (mat[j][i - 1]) {
        cut[i] = Math.min(cut[i], cut[j] + 1);
      }
    }
  }

  return cut[len];
};

function paMat(s) {
  var len = s.length;
  var mat = [];
  for (var i = 0; i < len; i++) {
    mat[i] = [];
    for (var j = 0; j < len; j++) {
      mat[i][j] = !!mat[i][j];
    }
  }

  for (var i = len - 1; i >= 0; i--) {
    for (var j = i; j < len; j++) {
      if (j === i) {
        mat[i][j] = true;
      } else if (j === i + 1) {
        mat[i][j] = (s.charAt(i) === s.charAt(j));
      } else {
        mat[i][j] = (s.charAt(i) === s.charAt(j)) && mat[i + 1][j - 1];
      }
    }
  }

  return mat;
}
