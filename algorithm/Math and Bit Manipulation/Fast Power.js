/**
 * Calculate the an % b where a, b and n are all 32bit integers.
 *
 * Example
 * For 231 % 3 = 2
 * For 1001000 % 1000 = 0
 *
 * Challenge
 * O(logn)
 */
/**
 * @param a: A 32bit integer
 * @param b: A 32bit integer
 * @param n: A 32bit integer
 * @return: An integer
 */
const fastPower = function (a, b, n) {
    if (n === 1) {
        return a % b;
    } else if (n === 0) {
        return 1 % b;
    } else if (n < 0) {
        return -1;
    }

    //(a * b) % p = ((a % p) * (b % p)) % p
    var res = fastPower(a, b, ~~(n / 2));
    res = (res * res) % b;
    if (n % 2 === 1) {
        res = (res * a) % b;
    }
    return res;
};
//数值可能会超过number类型的最大长度，出现溢出
console.log(fastPower(2147483647, 2147483645, 214748364));