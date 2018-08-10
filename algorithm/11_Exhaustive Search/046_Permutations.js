/**
 * Given a collection of distinct integers, return all possible permutations.
 *
 * Example:
 * Input: [1,2,3]
 * Output:
 * [
 * [1,2,3],
 * [1,3,2],
 * [2,1,3],
 * [2,3,1],
 * [3,1,2],
 * [3,2,1]
 * ]
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  var res = [],
    arr = [],
    hash = [],
    len = nums.length;
  if (nums === null) return res;
  dfs(nums, res, arr);

  return res;

  function dfs(nums) {
    if (arr.length === len) {
      var tmp = arr.map(function (t) {
        return t;
      });
      res.push(tmp);
      return;
    }

    for (var i = 0; i < len; i++) {
      if (hash[i]) continue;
      hash[i] = true;
      arr.push(nums[i]);
      dfs(nums);
      hash[i] = false;
      arr.pop();
    }
  }
};


