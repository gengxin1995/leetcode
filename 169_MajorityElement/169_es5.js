/**
 * Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
 *
 * You may assume that the array is non-empty and the majority element always exist in the array.
 *
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var nums = [6, 5, 5];
var majorityElement = function(nums) {
    var n = nums.length;
    var count = [];
    for (var i = 0; i < n; i++) {
        if (!count[nums[i]]) {
            count[nums[i]] = 1;
        } else {
            count[nums[i]]++;
        }

        if (count[nums[i]] > n/2) {
            return nums[i];
        }
    }
};