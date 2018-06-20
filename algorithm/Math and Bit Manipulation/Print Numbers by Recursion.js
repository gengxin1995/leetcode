/**
 * Print numbers from 1 to the largest number with N digits by recursion.
 *
 * Example
 * Given N = 1, return [1,2,3,4,5,6,7,8,9].
 * Given N = 2, return [1,2,3,4,5,6,7,8,9,10,11,12,...,99].
 *
 * Challenge
 * Do it in recursion, not for-loop.
 */

/**
 * @param n: An integer
 * @return: An array storing 1 to the largest number with n digits.
 */
const numbersByRecursion = function (n) {
    var result = [];
    if (n <= 0) return result;
    helper(n, result);
    return result;
}

function helper(n, result) {
    if (n === 0) return;
    helper(n - 1, result);

    var base = Math.pow(10, n - 1);
    var len = result.length;
    for (var i = 1; i < 10; i++) {
        result.push(i * base);
        for (var j = 0; j < len; j++) {
            result.push(result[j] + base * i);
        }
    }
}

console.log(numbersByRecursion(2));