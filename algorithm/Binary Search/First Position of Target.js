/**
 * For a given sorted array (ascending order) and a target number, find the first index of this number in O(log n) time complexity.
 * If the target number does not exist in the array, return -1.
 *
 * Example
 * If the array is [1, 2, 3, 3, 4, 5, 10], for given target 3, return 2.
 *
 * Challenge
 * If the count of numbers is bigger than 2^32, can your code work properly?
 */

/**
 * @param nums: The integer array.
 * @param target: Target to find.
 * @return: The first position of target. Position starts from 0.
 */
const binarySearch = function (nums, target) {
    var start = -1,
        end = nums.length;
    while (start + 1 < end) {
        var mid = ~~((start + end) / 2);
        if (nums[mid] < target) {
            start = mid;
        } else {
            end = mid;
        }
    }
    if (end === nums.length || nums[end] !== target) {
        return -1;
    } else {
        return end;
    }
}
var nums = [1, 2, 3, 3, 4, 5, 10];
console.log(binarySearch(nums, 3));

