/**
 * Given a set of distinct integers, nums, return all possible subsets (the power set).
 * Note: The solution set must not contain duplicate subsets.
 *
 * Example:
 * Input: nums = [1,2,3]
 * Output:
 * [
 * [3],
 * [1],
 * [2],
 * [1,2,3],
 * [1,3],
 * [2,3],
 * [1,2],
 * []
 * ]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  var arr = [],
    res = [],
    len = nums.length;
  nums.sort(function (a, b) {
    return a - b;
  });
  dfs(0, nums);

  return res;

  function dfs(index, nums) {
    var tmp = arr.map(function (t) {
      return t; })

    res.push(tmp);

    for (var i = index; i < len; i++) {
      arr.push(nums[i]);
      dfs(i + 1, nums);
      arr.pop();
    }
  }
};
var nums = [1, 2, 3];
console.log(subsets(nums));
