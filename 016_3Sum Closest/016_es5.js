/**
 * Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.
 *
 * Example:
 * Given array nums = [-1, 2, 1, -4], and target = 1.
 * The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    var len = nums.length;
    var result = 0;
    var min = Infinity;
    if (len < 3) return result;

    nums.sort(function (a, b) {
        return a - b;
    });

    for (var i = 0; i < len-2; i++) {
        for (var j = i+1, k = len-1; j < k;) {
            var sum = nums[i] + nums[j] + nums[k];
            var tmp = Math.abs(sum - target);

            if (tmp < min) {
                result = sum;
                min = tmp;
            }

            if (sum < target) {
                j++;
            } else {
                k--;
            }
        }
    }
    return result;
};

var nums = [-1,2,1,-4];
console.log(threeSumClosest(nums, 1));