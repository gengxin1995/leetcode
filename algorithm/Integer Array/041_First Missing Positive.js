/**
 * Given an unsorted integer array, find the smallest missing positive integer.
 *
 * Example 1:
 * Input: [1,2,0]
 * Output: 3
 *
 * Example 2:
 * Input: [3,4,-1,1]
 * Output: 2
 *
 * Example 3:
 * Input: [7,8,9,11,12]
 * Output: 1
 *
 * Note:
 * Your algorithm should run in O(n) time and uses constant extra space.
 */

/**
 * 利用桶排序，将nums[i]放到nums[nums[i]-1]位置，排好序后遍历桶，如果不满足nums[i]=i+1，则返回i+1
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    var len = nums.length;
    for (var i = 0; i < len; i++) {
        //零、负数以及比原数组容量大的数都不能在桶中找到生存空间
        //nums[i] !== i + 1，以满足条件则无需交换
        //nums[i] !== nums[nums[i] - 1])，避免欲交换的值和自身相同，否则有重复值时会产生死循环
        while (nums[i] > 0 && nums[i] <= len && (nums[i] !== i + 1) && (nums[i] !== nums[nums[i] - 1])) {
            var tmp = nums[nums[i] - 1];
            nums[nums[i] - 1] = nums[i];
            nums[i] = tmp;
        }
    }
    for (var i = 0; i < len; i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }
    return len + 1;
};
var nums = [3,4,-1,1];
console.log(firstMissingPositive(nums));