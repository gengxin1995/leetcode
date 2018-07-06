/**
 * Implement strStr().
 * Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 *
 * Example 1:
 * Input: haystack = "hello", needle = "ll"
 * Output: 2
 *
 * Example 2:
 * Input: haystack = "aaaaa", needle = "bba"
 * Output: -1
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    var len_h = haystack.length,
        len_n = needle.length;
    for (var i = 0; i < len_h - len_n + 1; i++) {
        for (var j = 0; j < len_n; j++) {
            if (haystack[i + j] !== needle[j]) {
                break;
            }

        }
        if (j === len_n)
            return i;
    }
    return -1;
};

var haystack = "hello",
    needle = "ll";
console.log(strStr(haystack, needle));