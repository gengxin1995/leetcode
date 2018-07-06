/**
 * The count-and-say sequence is the sequence of integers with the first five terms as following:
 * 1.     1
 * 2.     11
 * 3.     21
 * 4.     1211
 * 5.     111221
 * 1 is read off as "one 1" or 11.
 * 11 is read off as "two 1s" or 21.
 * 21 is read off as "one 2, then one 1" or 1211.
 * Given an integer n, generate the nth term of the count-and-say sequence.
 *
 * Note: Each term of the sequence of integers will be represented as a string.
 *
 * Example 1:
 * Input: 1
 * Output: "1"
 *
 * Example 2:
 * Input: 4
 * Output: "1211"
 */

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n === 1) {
        return '1';
    }

    var str = countAndSay(n - 1);
    var cnt = 1;
    var res = '';
    for (var i = 0; i < str.length; i++) {
        if (i + 1 < str.length && str[i] === str[i + 1]) {  //判断相邻字符是否相同，同时判断索引是否越界
            cnt++;
        } else {
            res += cnt + str[i];
            cnt = 1;
        }
    }
    return res;
};

console.log(countAndSay(5));