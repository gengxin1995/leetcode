/**
 * Partition an integers array into odd number first and even number second.
 *
 * Example
 * Given [1, 2, 3, 4], return [1, 3, 2, 4]
 *
 * Challenge
 * Do it in-place.
 * @param nums
 */
var partitionArray = function (nums) {
    var left = 0, right = nums.length - 1;
    while (left < right) {
        while (left < right && nums[left] % 2 !== 0) {
            left++;
        }
        while (left < right && nums[right] % 2 === 0) {
            right--;
        }
        if (left < right) {
            var tmp = nums[left];
            nums[left] = nums[right];
            nums[right] = tmp;
            left++;
            right--;
        }
    }
}
var nums = [1, 2, 3, 4, 5, 6];
partitionArray(nums);
console.log(nums);