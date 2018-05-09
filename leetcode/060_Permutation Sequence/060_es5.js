/**
 * The set [1,2,3,...,n] contains a total of n! unique permutations.
 * By listing and labeling all of the permutations in order, we get the following sequence for n = 3:
 *
 * "123"
 * "132"
 * "213"
 * "231"
 * "312"
 * "321"
 *
 * Given n and k, return the kth permutation sequence.
 *
 * Note:
 * Given n will be between 1 and 9 inclusive.
 * Given k will be between 1 and n! inclusive.
 *
 * Example 1:
 * Input: n = 3, k = 3
 * Output: "213"
 *
 * Example 2:
 * Input: n = 4, k = 9
 * Output: "2314"
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */

function find(index, hash) {
    var num = 0;
    for (var i = 1; i <= 9; i++) {
        if (!hash[i]) num++;
        if (num === index) {
            hash[i] = true;
            return i;
        }
    }
}

var getPermutation = function(n, k) {
    var a = [];
    a[0] = 1;
    for (var i = 1; i <= 9; i++) {
        a[i] = a[i - 1] * i;
    }

    var res = '';
    var hash = [];

    for (var i = n; i >= 1; i--) {
        var tmp = Math.ceil(k / a[i - 1]);
        k -= (tmp - 1) * a[i - 1];
        var index = find(tmp, hash);
        res += index;
    }
    return res;
};

console.log(getPermutation(4, 18));