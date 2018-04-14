/**
 * Given a 32-bit signed integer, reverse digits of an integer.
 *
 * Example 1:
 * Input: 123
 * Output: 321
 *
 * Example 2:
 * Input: -123
 * Output: -321
 *
 * Example 3:
 * Input: 120
 * Output: 21
 *
 * Note:
 * Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
 *
 */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var res;
    var arr = x.toString().split('');
    if (x < 0) {
        arr.shift();
    }
    res = Number(arr.reverse().join(''));
    if (x < 0) {
        res += -1;
    }

    return (res <= 0x7fffffff && res >= -0x80000000) ? res : 0;
};