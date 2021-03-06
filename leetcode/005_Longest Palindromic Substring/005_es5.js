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
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var len = s.length;
    if (len <= 0) {
        return '';
    }
    var maxLen = 1;
    var start = 0;

    for (var i = 0; i < len; i++) {
        var j = i-1, k = i+1;
        while (j >= 0 && k < len && s[j] === s[k]) {
            if (k-j+1 > maxLen) {
                maxLen = k-j+1;
                start = j;
            }
            j--;
            k++;
        }

        j = i;
        k = i+1;
        while (j >=0 && k < len && s[j] === s[k]) {
            if (k-j+1 > maxLen) {
                maxLen = k-j+1;
                start = j;
            }
            j--;
            k++;
        }
    }

    return s.substr(start, maxLen);

};
