/**
 * Determine the number of bits required to flip if you want to convert integer n to integer m.
 *
 * Notice
 * Both n and m are 32-bit integers.
 *
 * Example
 * Given n = 31 (11111), m = 14 (01110), return 2 .
 */
/**
 * @param a: An integer
 * @param b: An integer
 * @return: An integer
 */
const bitSwapRequired = function (a, b) {
    var count = 0;
    var aXORb = a ^ b;
    while (aXORb !== 0) {
        count++;
        //将异或得到的数分拆为若⼲个2的整数次幂， 计算得到有多少个2的整数次幂即可
        aXORb &= (aXORb - 1);
    }
    return count;
}
