/**
 * Given an integers array A.
 * Define B[i] = A[0] * ... * A[i-1] * A[i+1] * ... * A[n-1], calculate B WITHOUT divide operation.
 *
 * Example
 * For A=[1, 2, 3], return [6, 3, 2].
 */

/**
 * @param nums
 */
var productOfArrayExcludeItself = function (nums) {
    var len = nums.length;
    var res = [];
    if (len === 0 || len === 1) {
        return res;
    }
    res[0] = 1;
    for (var i = 1; i < len; i++) {
        res[i] = res[i - 1] * nums[i - 1];
    }
    var tmp = 1;
    for (var i = len - 1; i >= 0; i--) {
        res[i] *= tmp;
        tmp *= nums[i];
    }
    return res;
}
var nums = [1, 2, 3];
console.log(productOfArrayExcludeItself(nums));