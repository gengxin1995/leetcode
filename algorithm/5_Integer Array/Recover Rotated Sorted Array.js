/**
 * Given a rotated sorted array, recover it to sorted array in-place.
 *
 * Example
 * [4, 5, 1, 2, 3] -> [1, 2, 3, 4, 5]
 *
 * Challenge
 * In-place, O(1) extra space and O(n) time.
 */

/**
 * @param nums: An integer array
 * @return:
 */
const recoverRotatedSortedArray = function (nums) {
    var len = nums.length;
    while (nums[0] >= nums[len - 1]) {
        nums.push(nums.shift());
    }
}

const recoverRotatedSortedArray1 = function (nums) {
    var len = nums.length;
    var pos = 0;
    for (var i = 0; i < len - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            break;
        }
        pos++;
    }
    reverse(nums, 0, pos);
    reverse(nums, pos + 1, len - 1);
    reverse(nums, 0, len - 1);
}
function reverse(nums, start, end) {
    for (var i = start, j = end; i < j; i++, j--) {
        var tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
    }
}

var nums = [4, 5, 1, 2, 3];
//var nums = [1,1,1,0,1,1];
recoverRotatedSortedArray1(nums)
console.log(nums);
