/**
 * Given an array nums of integers and an int k, partition the array (i.e move the elements in "nums") such that:
 * All elements < k are moved to the left
 * All elements >= k are moved to the right
 * Return the partitioning index, i.e the first index i nums[i] >= k.
 *
 * Example
 * If nums = [3,2,2,1] and k=2, a valid answer is 1.
 *
 * Challenge
 * Can you partition the array in-place and in O(n)?
 */

/**
 * @param nums: The integer array you should partition
 * @param k: An integer
 * @return: The index after partition
 */
const partitionArray = function (nums, k) {
    var left = 0,
        right = nums.length - 1;
    while (left <= right) {
        while (left <= right && nums[left] < k) left++;
        while (left <= right && nums[right] >= k) right--;
        if (left <= right) {
            var tmp = nums[left];
            nums[left] = nums[right];
            nums[right] = tmp;
            left++;
            right--;
        }
    }
    return left;
}
//var nums = [3,2,2,1]
var nums = [5, 2, 18, 7, 16, 19, 32, 15, 24];
console.log(partitionArray(nums, 24));