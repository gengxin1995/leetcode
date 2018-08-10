/**
 * Given a collection of numbers that might contain duplicates, return all possible unique permutations.
 *
 * Example:
 * Input: [1,1,2]
 * Output:
 * [
 * [1,1,2],
 * [1,2,1],
 * [2,1,1]
 * ]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  var res = [],
    arr = [],
    hash = [],
    len = nums.length;
  var hashArr = [];
  if (nums === null) return res;
  dfs(nums, res, arr);

  return res;

  function dfs(nums) {
    if (arr.length === len) {
      var tmp = arr.map(function (t) {
        return t;
      });
      if (hashArr[tmp.toString()]) return;
      hashArr[tmp.toString()] = true;
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
