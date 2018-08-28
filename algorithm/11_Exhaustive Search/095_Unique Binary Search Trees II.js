/**
 * Given an integer n, generate all structurally unique BST's (binary search trees) that store values 1 ... n.
 *
 * Example:
 * Input: 3
 * Output:
 * [
 * [1,null,3,2],
 * [3,2,null,1],
 * [3,1,null,null,2],
 * [2,1,3],
 * [1,null,2,null,3]
 * ]
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
var generateTrees = function(n) {
  if (!n) return [];
  return dfs(1, n);
};

function dfs(start, end) {
  if (start > end) {
    return [null];
  }

  var res = [];
  for (var i = start; i <= end; i++) {
    var left = dfs(start, i - 1);
    var right = dfs(i + 1, end);

    // left.forEach(a => {
    //   right.forEach(b => {
    //     var node = new TreeNode(i);
    //     node.left = a;
    //     node.right = b;
    //     res.push(node);
    //   })
    // })
    left.forEach(function (a) {
      right.forEach(function (b) {
        var node = new TreeNode(i);
        node.left = a;
        node.right = b;
        res.push(node);
      })
    })
  }

  return res;
}

console.log(generateTrees(3));
