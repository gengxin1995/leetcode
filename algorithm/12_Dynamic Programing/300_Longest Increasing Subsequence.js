/**
 * Given an unsorted array of integers, find the length of longest increasing subsequence.
 *
 * Example:
 * Input: [10,9,2,5,3,7,101,18]
 * Output: 4
 * Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
 *
 * Note:
 * There may be more than one LIS combination, it is only necessary for you to return the length.
 * Your algorithm should run in O(n2) complexity.
 *
 * Follow up: Could you improve it to O(n log n) time complexity?
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  var len = nums.length;
  var arr = [];
  for (var i = 0; i < len; i++) {
    arr[i] = 1;
  }

  for (var i = 1; i < len; i++) {
    for (var j = 0; j < i; j++) {
      if (nums[j] < nums[i] && (arr[i] < arr[j] + 1)) {
        arr[i] = arr[j] + 1;
      }
    }
  }

  var max = 0;
  for (var i = 0; i < len; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }

  return max;
};

var nums = [10,9,2,5,3,7,101,18];
console.log(lengthOfLIS(nums));
