/**
 * Given an integer n, count the total number of digit 1 appearing in all non-negative integers less than or equal to n.
 *
 * Example:
 * Input: 13
 * Output: 6
 * Explanation: Digit 1 occurred in the following numbers: 1, 10, 11, 12, 13.
 */

/**
 * @param {number} n
 * @return {number}
 */
/*//Time Limit Exceeded
var countDigitOne = function(n) {
    var count = 0;
    for (var i = 0; i <= n; i++) {
        var chars = i.toString().split('');
        for (var j = 0; j < chars.length; j++) {
            if (chars[j] === '1') {
                count++;
            }
        }
    }
    return count;
};*/
var countDigitOne = function(n) {
    var count = 0;
    for (var i = 1; i <= n; i *= 10) {
        var divider = i * 10;
        count += (~~(n / divider)) * i + Math.min(Math.max(n % divider - i + 1, 0), i);
    }
    return count;
}

console.log(countDigitOne(13));