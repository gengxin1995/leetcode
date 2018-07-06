/**
 * Given a non-empty array of integers, every element appears three times except for one, which appears exactly once. Find that single one.
 *
 * Note:
 * Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
 *
 * Example 1:
 * Input: [2,2,3,2]
 * Output: 3
 *
 * Example 2:
 * Input: [0,1,0,1,0,1,99]
 * Output: 99
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var single = 0;
    for (var i = 0; i < 32; i++) {
        var bitSum = 0;
        for (var j = 0; j < nums.length; j++) {
            bitSum += ((nums[j] >>> i) & 1);
        }
        single |= ((bitSum % 3) << i);
    }
    return single;
};

var singleNumber1 = function(nums) {
    var one = 0, two = 0, three = 0;
    for (var i = 0; i < nums.length; ++i) {
        two |= one & nums[i];
        one ^= nums[i];
        three = ~(one & two);
        one &= three;
        two &= three;
    }
    return one;
};

var nums = [2,2,3,2];
console.log(singleNumber(nums));