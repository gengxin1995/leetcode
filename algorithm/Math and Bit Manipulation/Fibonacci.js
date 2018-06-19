/**
 * Find the _N_th number in Fibonacci sequence.
 * A Fibonacci sequence is defined as follow:
 * The first two numbers are 0 and 1.
 * The i th number is the sum of i-1 th number and i-2 th number.
 * The first ten numbers in Fibonacci sequence is:
 * 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ...
 *
 * Example
 * Given 1 , return 0
 * Given 2 , return 1
 * Given 10 , return 34
 */
/**
 * @param n: an integer
 * @return: an ineger f(n)
 */
const fibonacci = function (n) {
    if (n <= 0) {
        return -1;
    }
    if (n === 1) {
        return 0;
    }
    if (n === 2) {
        return 1;
    }

    var fn = 0, fn1 = 0, fn2 = 1;
    for (var i = 3; i <= n; i++) {
        fn = fn1 + fn2;
        fn1 = fn2;
        fn2 = fn;
    }

    return fn;
}
console.log(fibonacci(10));
