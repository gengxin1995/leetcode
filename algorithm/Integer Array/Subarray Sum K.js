/**
 * Given an nonnegative integer array, find a subarray where the sum of numbers is k. Your code should return the index of the first number and the index of the last number.
 *
 * Example
 * Given [1, 4, 20, 3, 10, 5] , sum k = 33, return [2, 4] .
 */

/**
 * 利用数组中元素非负，所以索引i处的累加和单调不减
 * @param nums: A list of integers
 * @return: A list of integers includes the index of the first number and the index of the last number
 */
const subarraySumK = function (nums, k) {
    var res = [];
    var index = 0,
        sum = 0;

    for (var i = 0; i < nums.length; i++) {
        sum += nums[i];

        while (sum > k) {
            sum -= nums[index];
            index++;
        }

        if (sum === k) {
            res.push(index);
            res.push(i);
            return res;
        }
    }
    return res;
};
var nums = [1, 4, 20, 3, 10, 5];
console.log(subarraySumK(nums, 18));