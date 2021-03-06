/**
 * Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
 * (i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).
 * Find the minimum element.
 * You may assume no duplicate exists in the array.
 *
 * Example 1:
 * Input: [3,4,5,1,2]
 * Output: 1
 *
 * Example 2:
 * Input: [4,5,6,7,0,1,2]
 * Output: 0
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    var start = 0,
        end = nums.length - 1;
    while (start + 1 < end) {
        var mid = ~~((start + end) / 2);
        if (nums[start] > nums[end]) {
            if (nums[start] < nums[mid]) {
                start = mid;
            } else {
                end = mid;
            }
        } else {
            return nums[start];
        }
    }
    if (nums[start] < nums[end]) {
        return nums[start];
    } else {
        return nums[end];
    }
};

var nums = [0,1,2];
//var nums = [3,4,5,1,2];
console.log(findMin(nums));