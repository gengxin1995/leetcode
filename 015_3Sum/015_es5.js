/**
 * Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
 *
 * Note:
 * The solution set must not contain duplicate triplets.
 *
 * Example:
 * Given array nums = [-1, 0, 1, 2, -1, -4],
 * A solution set is:
 * [
 * [-1, 0, 1],
 * [-1, -1, 2]
 * ]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var len = nums.length;
    var result = [];
    if (len < 3) return result;

    nums.sort(function (a, b) {
        return a - b;
    });

    for (var i = 0; i < len-2; i++) {
        if (i && nums[i] === nums[i-1]) continue;
        for (var j = i+1, k = len-1; j < k;) {
            if (nums[i] + nums[j] + nums[k] < 0) {
                j++;
            } else if (nums[i] + nums[j] + nums[k] > 0) {
                k--;
            } else {
                result.push([nums[i], nums[j], nums[k]]);
                j++;
                k--;
                while (nums[j] === nums[j-1] && j < k) j++;
                while (nums[k] === nums[k+1] && j < k) k--;
            }
        }
    }
    return result;
};