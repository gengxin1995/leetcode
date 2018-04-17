/**
 * Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.
 *
 * Note:
 * The solution set must not contain duplicate quadruplets.
 *
 * Example:
 * Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.
 *
 * A solution set is:
 * [
 * [-1,  0, 0, 1],
 * [-2, -1, 1, 2],
 * [-2,  0, 0, 2]
 * ]
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    var len = nums.length;
    var result = [];
    if (len < 4) return result;

    nums.sort(function (a, b) {
        return a - b;
    });

    for (var i = 0; i < len - 3; i++) {
        if (i && nums[i] === nums[i-1]) continue;
        for (var j = i + 1; j < len - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j-1]) continue;
            for (var k = j + 1, l = len - 1; k < l;) {
                if (nums[i] + nums[j] + nums[k] + nums[l] < target) {
                    k++;
                } else if (nums[i] + nums[j] + nums[k] + nums[l] > target) {
                    l--;
                } else {
                    result.push([nums[i], nums[j], nums[k], nums[l]]);
                    k++;
                    l--;
                    while (nums[k] === nums[k - 1] && k < l) k++;
                    while (nums[l] === nums[l + 1] && k < l) l--;
                }
            }
        }
    }
    return result;
};

var nums = [-3,-2,-1,0,0,1,2,3];
console.log(fourSum(nums, 0));