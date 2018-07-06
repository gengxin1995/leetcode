/**
 * Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*'.
 *
 * '?' Matches any single character.
 * '*' Matches any sequence of characters (including the empty sequence).
 * The matching should cover the entire input string (not partial).
 *
 * Note:
 * s could be empty and contains only lowercase letters a-z.
 * p could be empty and contains only lowercase letters a-z, and characters like ? or *.
 */

/**
 * 贪心+回溯
 * 当遇到*的时候，p指针往后走一步，如果还是*则继续走，直到不是*为止，这时s不走与p匹配，如果不匹配，回溯回去，s指针走一步与当前的p匹配(*匹配了一个字符)，以此类推
 * 当*之后的一个字符与s当前的字符匹配的时候，就认为这之前的字符都匹配好了，之后遇到*不需要回溯到已经匹配好的*了(只需要回溯到最近的*)
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    var starS = null, starP = null;
    var i = 0, j = 0;
    while (s[i]) {
        if (s[i] === p[j] || p[j] === '?') {
            i++;
            j++;
            continue;
        }
        if (p[j] === '*') {
            while (p[j + 1] && p[j + 1] === '*') {
                j++;
            }
            starS = i;
            starP = j;
            j++;
            continue;
        }
        if (starS !== null) {
            i = starS + 1;
            j = starP + 1;
            starS++;
            continue;
        }
        return false;
    }
    while (p[j] === '*') {
        j++;
    }

    return !p[j];
};

//var s = 'adceb', p = '*a*b';
var s = 'acdcb', p = 'a*c?b';
console.log(isMatch(s, p));












