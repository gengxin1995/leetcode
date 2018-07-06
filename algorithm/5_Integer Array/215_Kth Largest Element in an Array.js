/**
 * Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.
 *
 * Example 1:
 * Input: [3,2,1,5,6,4] and k = 2
 * Output: 5
 *
 * Example 2:
 * Input: [3,2,3,1,2,4,5,5,6] and k = 4
 * Output: 4
 *
 * Note:
 * You may assume k is always valid, 1 ≤ k ≤ array's length.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    return kth(nums, 0, nums.length - 1, k);
};

function kth(nums, left, right, k) {
    var l = left,
        r = right;
    var pos = nums[right];
    while (left < right) {
        while (left < right && nums[left] > pos) {
            left++;
        }
        if (left < right) {
            nums[right] = nums[left];
            right--;
        }
        while (left < right && nums[right] <= pos) {
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
    } else if (k < left + 1) {
        return kth(nums,l, left - 1, k);
    } else {
        return kth(nums, left + 1, r, k);
    }
}

//var nums = [3,2,1,5,6,4];
var nums = [3,2,3,1,2,4,5,5,6];
console.log(findKthLargest(nums, 4));