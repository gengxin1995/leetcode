/**
 * Given a set of candidate numbers (candidates) (without duplicates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.
 * The same repeated number may be chosen from candidates unlimited number of times.
 *
 * Note:
 * All numbers (including target) will be positive integers.
 * The solution set must not contain duplicate combinations.
 *
 * Example 1:
 * Input: candidates = [2,3,6,7], target = 7,
 * A solution set is:
 * [
 * [7],
 * [2,2,3]
 * ]
 *
 * Example 2:
 * Input: candidates = [2,3,5], target = 8,
 * A solution set is:
 * [
 * [2,2,2,2],
 * [2,3,3],
 * [3,5]
 * ]
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  var res = [],
    arr = [];

  candidates.sort(function (a, b) {
    return a - b;
  });

  dfs(candidates, 0, target, arr, res);

  return res;
};

function dfs(candidates, pos, gap, arr, res) {
  if (gap === 0) {
    var tmp = arr.map(function (t) {
      return t;
    });

    res.push(tmp);
    return;
  }
  for (var i = pos; i < candidates.length; i++) {
    if (gap < candidates[i]) {
      return;
    }
    arr.push(candidates[i]);
    dfs(candidates, i, gap - candidates[i], arr, res);
    arr.pop();
  }

}

var candidates = [2, 3, 6, 7];
console.log(combinationSum(candidates, 7));
