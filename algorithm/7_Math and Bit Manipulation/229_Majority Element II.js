/**
 * Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.
 * Note: The algorithm should run in linear time and in O(1) space.
 *
 * Example 1:
 * Input: [3,2,3]
 * Output: [3]
 *
 * Example 2:
 * Input: [1,1,1,3,3,2,2,2]
 * Output: [1,2]
 */

/**
 * 三三抵消
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    var len = nums.length;
    var res = [];
    if (len <= 0) return res;

    var key1 = -1, key2 = -1,
        count1 = 0, count2 = 0;
    for (var i = 0; i < len; i++) {
        if (count1 === 0 && key2 !== nums[i]) {
            key1 = nums[i];
            count1 = 1;
            continue;
        } else if (count2 === 0 && key1 !== nums[i]) {
            key2 = nums[i];
            count2 = 1;
            continue;
        }

        if (key1 === nums[i]) {
            count1++;
        } else if (key2 === nums[i]) {
            count2++;
        } else {
            count1--;
            count2--;
        }
    }
    count1 = 0;
    count2 = 0
    for (var i = 0; i < len; i++) {
        if (key1 === nums[i]) {
            count1++;
        } else if (key2 === nums[i]) {
            count2++;
        }
    }

    if (count1 > ~~(len / 3)) {
        res.push(key1);
    }
    if (count2 > ~~(len / 3)) {
        res.push(key2);
    }
    return res;
};

//var nums = [1,2,2,3,2,1,1,3];
var nums = [1,1,1,3,3,2,2,2];
console.log(majorityElement(nums));