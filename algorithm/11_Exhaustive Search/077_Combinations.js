/**
 * Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.
 *
 * Example
 * For example, If n = 4 and k = 2, a solution is: [[2,4],[3,4],[2,3],[1,2],[1,3],[1,4]]
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  var res = [],
    arr = [];
  dfs(n, k, 1, arr, res);
  return res;
};

function dfs(n, k, pos, arr, res) {
  if (arr.length === k) {
    var tmp = arr.map(function (t) {
      return t;
    });
    res.push(tmp);
    return;
  }

  for (var i = pos; i <= n; i++) {
    arr.push(i);
    dfs(n, k, i + 1, arr, res);
    arr.pop();
  }
}

console.log(combine(4, 2));
