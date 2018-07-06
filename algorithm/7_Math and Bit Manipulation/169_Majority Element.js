/**
 * Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
 * You may assume that the array is non-empty and the majority element always exist in the array.
 *
 * Example 1:
 * Input: [3,2,3]
 * Output: 3
 *
 * Example 2:
 * Input: [2,2,1,1,1,2,2]
 * Output: 2
 */

/**
 * 既然某个数超过⼆分之⼀，那么⽤这个数和其他数进⾏比较，不同的计数器都减⼀（ 核⼼在于两两抵消），相同的则加1，最后返回计数器⼤于0的即可。
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var len = nums.length;
    if (len <= 0) return -1;

    var key = -1, count = 0;
    for (var i = 0; i < len; i++) {
        if (count === 0) {
            key = nums[i];
            count = 1;
            continue;
        }
        if (key === nums[i]) {
            count++;
        } else {
            count--;
        }

    }
    return key;
};

var nums = [2,2,1,1,1,2,2];
console.log(majorityElement(nums));