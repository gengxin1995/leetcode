/**
 * Given a unsorted array with integers, find the median of it.
 * A median is the middle number of the array after it is sorted.
 * If there are even numbers in the array, return the N/2 -th number after sorted.
 *
 * Example
 * Given [4, 5, 1, 2, 3] , return 3 .
 * Given [7, 9, 4, 5] , return 5 .
 *
 * Challenge
 * O(n) time.
 */

/**
 * 寻找未排序数组中的中位数
 * 可以利用快速排序的思想，以基准为界将元素划分为左右两个部分，递归终止的条件为基准的位置为数组的中位数
 * @param nums: A list of integers
 * @return: An integer denotes the middle number of the array
 */
const median = function (nums) {
    var len = nums.length;
    if (len === 0) return;
    return kth(nums, 0, len - 1, ~~((len + 1) / 2));
}
function kth(nums, left, right, k) {
    var l = left,
        r = right;
    var pos = nums[right];
    while (left < right) {
        while (left < right && nums[left] <= pos) {
            left++;
        }
        if (left < right) {
            nums[right] = nums[left];
            right--;
        }
        while (left < right && nums[right] > pos) {
            right--;
        }
        if (left < right) {
            nums[left] = nums[right];
            left++;
        }
    }
    nums[left] = pos;
    if (k === left + 1) {
        return nums[left];
    } else if (k > left + 1) {
        return kth(nums, left + 1, r, k);
    } else {
        return kth(nums, l, left - 1, k);
    }
}
var nums = [7, 9, 4, 5];
console.log(median(nums));
