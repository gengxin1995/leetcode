/**
 * Given a string, find the length of the longest substring without repeating characters.
 *
 * Examples:
 *
 * Given "abcabcbb", the answer is "abc", which the length is 3.
 * Given "bbbbb", the answer is "b", with the length of 1.
 * Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 *
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var hash = [];
    var i = 0;
    var res = 0;
    var len = s.length;

    if (len < 2) {
        return len;
    }

    for (var j = 0; j < len; j++) {
        var tmp = s[j];
        if (!hash[tmp]) {
            hash[tmp] = true;
        } else {
            while (true) {
                if (s[i] === tmp) {
                    i++;
                    break;
                }
                hash[s[i]] = false;
                i++;
            }
        }

        res = Math.max(res, j-i+1);
    }
    return res;
};

var s = "abcabcbb";
console.log(lengthOfLongestSubstring(s));