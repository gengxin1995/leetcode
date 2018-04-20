/**
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
 *
 * Example:
 * Input: [-2,1,-3,4,-1,2,1,-5,4],
 * Output: 6
 * Explanation: [4,-1,2,1] has the largest sum = 6.
 *
 * Follow up:
 * If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var res = [];
    var len = nums.length;
    var max = -Infinity;
    for (var i = 0; i < len; i++) {
        if (!i) {
            res[i] = nums[i];
            max = Math.max(max, res[i]);
        } else {
            res[i] = Math.max(res[i-1], 0) + nums[i];
            max = Math.max(max, res[i]);
        }
    }
    return max;
};

var nums = [-2,-1, -3];
console.log(maxSubArray(nums));