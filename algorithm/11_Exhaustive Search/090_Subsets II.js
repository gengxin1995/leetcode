/**
 * Given a collection of integers that might contain duplicates, nums, return all possible subsets (the power set).
 * Note: The solution set must not contain duplicate subsets.
 *
 * Example:
 * Input: [1,2,2]
 * Output:
 * [
 * [2],
 * [1],
 * [1,2,2],
 * [2,2],
 * [1,2],
 * []
 * ]
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  var res = [],
    arr = [],
    hash = [],
    len = nums.length;

  nums.sort(function (a, b) {
    return a - b;
  });

  dfs(0, nums);
  return res;

  function dfs(index, nums) {
    var tmp = arr.map(function (t) {
      return t;
    });

    if (!hash[tmp.toString()]) {
      hash[tmp.toString()] = true;
      res.push(tmp);
    }

    for (var i = index; i < len; i++) {
      arr.push(nums[i]);
      dfs(i + 1, nums);
      arr.pop();
    }
  }
};

console.log(subsetsWithDup([1, 2, 2]));
