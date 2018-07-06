/**
 * Given an input string, reverse the string word by word.
 *
 * Example:
 * Input: "the sky is blue",
 * Output: "blue is sky the".
 *
 * Note:
 * A word is defined as a sequence of non-space characters.
 * Input string may contain leading or trailing spaces. However, your reversed string should not contain leading or trailing spaces.
 * You need to reduce multiple spaces between two words to a single space in the reversed string.
 * Follow up: For C programmers, try to solve it in-place in O(1) space.
 */

/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
    str = str.trim();
    str = str.replace(/\s+/g, ' ');
    var arr = str.split(' ').reverse();
    return arr.join(' ');
};