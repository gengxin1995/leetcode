/**
 * Given an integer array, find a subarray where the sum of numbers is zero. Your code should return the index of the first number and the index of the last number.
 *
 * Example
 * Given [-3, 1, 2, -3, 4], return [0, 2] or [1, 3].
 */

/**
 * @param nums: A list of integers
 * @return: A list of integers includes the index of the first number and the index of the last number
 */
const subarraySum = function (nums) {
    var res = [];
    var hash = {};
    hash[0] = 0;
    var sum = 0;

    for (var i = 0; i < nums.length; i++) {
        //累加数组中的值
        sum += nums[i];
        if (hash.hasOwnProperty(sum)) {
            //如果索引i处的累加和对应的hash值已存在，则表示从该hash值到索引i的子数组和为0
            res.push(hash[sum]);
            res.push(i);
            return res;
        } else {
            hash[sum] = i + 1;
        }
    }
    return res;
};
var nums = [4,2,-3,1,6];
console.log(subarraySum(nums));