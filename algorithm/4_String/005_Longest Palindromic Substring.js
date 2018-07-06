/**
 * Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
 *
 * Example 1:
 * Input: "babad"
 * Output: "bab"
 *
 * Note: "aba" is also a valid answer.
 *
 * Example 2:
 * Input: "cbbd"
 * Output: "bb"
 */

/**
 * 假定扫描的每个字母是回文的中间位置（需要处理奇偶两种情况），从该位置向两头搜索寻找最大回文长度
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var len = s.length;
    if (len <= 0) {
        return '';
    }
    var start = 0;
    var maxLen = 1;

    for (var i = 0; i < len; i++) {
        var j = i - 1, k = i + 1;
        while (j >= 0 && k < len && s[j] == s[k]) {
            if (k - j + 1 > maxLen) {
                start = j;
                maxLen = k - j + 1;
            }
            j--;
            k++;
        }
        j = i;
        k = i + 1;
        while (j >= 0 && k < len && s[j] == s[k]) {
            if (k - j + 1 > maxLen) {
                start = j;
                maxLen = k - j + 1;
            }
            j--;
            k++;
        }
    }

    return s.substr(start, maxLen);

};
