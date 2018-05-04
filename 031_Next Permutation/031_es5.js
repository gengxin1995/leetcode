/**
 * Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.
 * If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).
 * The replacement must be in-place and use only constant extra memory.
 *
 * Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.
 *
 * 1,2,3 → 1,3,2
 * 3,2,1 → 1,2,3
 * 1,1,5 → 1,5,1
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    var len = nums.length;
    var pos, flag = false;

    for (var i = len - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            flag = true;
            pos = i;
            break;
        }
    }

    if (!flag) {
        nums.sort(function (a, b) {
            return a - b;
        })
    } else {
        for (var i = len - 1; ;i--) {
            if (nums[i] > nums[pos]) {
                var tmp = nums[i];
                nums[i] = nums[pos];
                nums[pos] = tmp;
                break;
            }
        }

        var tmp = nums.slice(pos + 1).sort(function (a, b) {
            return a - b;
        });

        nums.length = pos + 1;

        Array.prototype.push.apply(nums, tmp);
    }
};

nums = [6,4,1,4,3,2];
nextPermutation(nums);
console.log(nums);