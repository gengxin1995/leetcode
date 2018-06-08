/**
 * Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.
 * Your algorithm's runtime complexity must be in the order of O(log n).
 * If the target is not found in the array, return [-1, -1].
 *
 * Example 1:
 * Input: nums = [5,7,7,8,8,10], target = 8
 * Output: [3,4]
 *
 * Example 2:
 * Input: nums = [5,7,7,8,8,10], target = 6
 * Output: [-1,-1]
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    var len = nums.length,
        start = -1,
        end = len;
    var res = [-1, -1];
    //find first position
    while (start + 1 < end) {
        var mid = ~~((start + end) / 2);
        if (nums[mid] < target) {
            start = mid;
        } else {
            end = mid;
        }
    }
    if (end < len && nums[end] === target) {
        res[0] = end;
    } else {
        return res;
    }

    //find last position
    end = len;
    while (start + 1 < end) {
        var mid = ~~((start + end) / 2);
        if (nums[mid] > target) {
            end = mid;
        } else {
            start = mid;
        }
    }
    res[1] = start;

    return res;
};

var nums = [5,7,7,8,8,10];
console.log(searchRange(nums, 6));