/**
 * Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.
 * If the last word does not exist, return 0.
 *
 * Note: A word is defined as a character sequence consists of non-space characters only.
 *
 * Example:
 * Input: "Hello World"
 * Output: 5
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim();
    str = s.replace(/\s/g, ' ');
    if (!str.length) {
        return 0;
    }

    var arr = str.split(' ');
    return arr[arr.length - 1].length;
};
var s = "Hello World";
console.log(lengthOfLastWord(s));