/**
 * Given two strings, find the longest common substring.
 * Return the length of it.
 *
 * Example
 * Given A = "ABCD", B = "CBCE", return 2.
 *
 * Challenge
 * O(n x m) time and memory.
 */

/**
 * 动态规划
 * 状态转移方程：dp[i+1][j+1] = (A[i] == B[j]) ? dp[i][j] + 1 : 0
 * @param A: A string
 * @param B: A string
 * @return: the length of the longest common substring.
 */
const longestCommonSubstring = function (A, B) {
    var dp = [];
    var m = A.length,
        n = B.length;
    for (var i = 0; i <= m; i++) {
        dp[i] = [];
        dp[i][0] = 0;
    }
    for (var j = 1; j <= n; j++) {
        dp[0][j] = 0;
    }

    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (A.charAt(i) == B.charAt(j)) {
                dp[i+1][j+1] = dp[i][j] + 1;
            } else {
                dp[i+1][j+1] = 0;
            }
        }
    }

    var res = 0;
    for (var i = 1; i <= m; i++) {
        for (var j = 1; j <= n; j++) {
            if (dp[i][j] > res) {
                res = dp[i][j];
            }
        }
    }
    return res;
}

var A = "ABCD", B = "CBCE";
console.log(longestCommonSubstring(A, B));
