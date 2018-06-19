/**
 * Write a function that add two numbers A and B.
 *
 * Clarification
 * Are a and b both 32-bit integers?
 * Yes.
 * Can I use bit operation?
 * Sure you can.
 *
 * Example
 * Given a=1 and b=2 return 3.
 *
 * Challenge
 * Of course you can just return a + b to get accepted. But Can you challenge not do it like that?(You should not use + or any arithmetic operators.)
 */

/**
 * @param a: An integer
 * @param b: An integer
 * @return: The sum of a and b
 */
const aplusb = function (a, b) {
    // write your code here
    var result = a ^ b;
    var carry = a & b;
    carry <<= 1;
    if (carry !== 0) {
        result = aplusb(result, carry);
    }
    return result;
}
console.log(aplusb(1, 2));

