/**
 * Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most k.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    var pos = [];

    for (var i = 0; i < nums.length; i++) {
        if (pos[nums[i]] === undefined) {
            pos[nums[i]] = i;
        } else {
            if (i - pos[nums[i]] <= k) {
                return true;
            }
            pos[nums[i]] = i;
        }
    }

    return false;
};