/**
 * Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
 * You may assume no duplicates in the array.
 *
 * Example 1:
 * Input: [1,3,5,6], 5
 * Output: 2
 *
 * Example 2:
 * Input: [1,3,5,6], 2
 * Output: 1
 *
 * Example 3:
 * Input: [1,3,5,6], 7
 * Output: 4
 *
 * Example 4:
 * Input: [1,3,5,6], 0
 * Output: 0
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var len = nums.length;
    for (var i = 0, j = len - 1; i <= j;) {
        var mid = Math.floor((i+j)/2);
        if (i > len - 1) return len;
        if (j < 0) return 0;
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            j = mid - 1;
        } else {
            i = mid + 1;
        }
    }
    return i;
};
var nums = [1,3,5];
console.log(searchInsert(nums, 5));