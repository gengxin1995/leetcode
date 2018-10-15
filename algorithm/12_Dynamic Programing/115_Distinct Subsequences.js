/**
 * Given a string S and a string T, count the number of distinct subsequences of S which equals T.
 * A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, "ACE" is a subsequence of "ABCDE" while "AEC" is not).
 *
 * Example 1:
 * Input: S = "rabbbit", T = "rabbit"
 * Output: 3
 * Explanation:
 * As shown below, there are 3 ways you can generate "rabbit" from S. (The caret symbol ^ means the chosen letters)
 * rabbbit
 * ^^^^ ^^
 * rabbbit
 * ^^ ^^^^
 * rabbbit
 * ^^^ ^^^
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
  if (s === null || t === null) return 0;
  var len1 = s.length, len2 = t.length;
  if (len1 < len2) return 0;
  if (len2 === 0) return 1;

  var dp = Array.from(Array(len1 + 1)).map(() => Array(len2 + 1).fill(0))

  for (var i = 0; i < len1; i++) {
    dp[i][0] = 1;
    for (var j = 0; j < len2; j++) {
      if (s[i] === t[j]) {
        dp[i + 1][j + 1] = dp[i][j + 1] + dp[i][j];
      } else {
        dp[i + 1][j + 1] = dp[i][j + 1];
      }
    }
  }

  return dp[len1][len2];
};
