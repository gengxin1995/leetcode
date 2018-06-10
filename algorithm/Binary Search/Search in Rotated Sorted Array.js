/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    var len = nums.length;
    var start = 0,
        end = len - 1;
    while (start <= end) {
        var mid = ~~((start + end) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        if (nums[start] <= nums[mid]) {
            if (nums[start] <= target && target < nums[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else {
            if (nums[mid] < target && target <= nums[end]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }
    return -1;
};
var nums = [4, 5, 7, 0, 1, 2];
console.log(search(nums, 3));