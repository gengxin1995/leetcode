/**
 * 时间复杂度O(n)，空间复杂度O(1)
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var len = nums.length;

    for (var i = 0; i < len; i++) {
        if (nums[i] === val) {
            nums[i] = nums[len - 1];
            len--;
            i--;
        }
    }
    nums.length = len;
    return len;
};
var nums = [1, 2, 1, 3, 4];
console.log(removeElement(nums, 1));