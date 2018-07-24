/**
 * Given a binary search tree with non-negative values, find the minimum absolute difference between values of any two nodes.
 * Example:
 * Input:
 * 1
 *  \
 *   3
 *  /
 * 2
 * Output:
 * 1
 * Explanation:
 * The minimum absolute difference is 1, which is the difference between 2 and 1 (or between 2 and 3).
 * Note: There are at least two nodes in this BST.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
  var min = Infinity;
  if (!root) return min;
  var res = [];
  res = inOrder(root);
  for (var i = 1; i < res.length; i++) {
    min = Math.min(min, res[i] - res[i - 1]);
  }
  return min;
  function inOrder(root) {
    if (!root) return;
    inOrder(root.left);
    res.push(root.val);
    inOrder(root.right);
    return res;
  }
};


