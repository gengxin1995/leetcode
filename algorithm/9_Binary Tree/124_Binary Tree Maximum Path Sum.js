/**
 * Given a non-empty binary tree, find the maximum path sum.
 * For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 求最大路径和，不一定包含根节点
 * 遍历每个节点的最大子路径和，得到最大路径和
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
  if (root == null) return 0;
  var res = -Infinity;
  var stack = [];
  stack.push(root);
  while (stack.length > 0) {
    var node = stack.pop();
    var temp = node.val + singlePathSum(node.left) + singlePathSum(node.right);
    if (temp > res) {
      res = temp;
    }
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }
  return res;
};

function singlePathSum(root) {
  if (root == null) return 0;

  var sum = Math.max(singlePathSum(root.left), singlePathSum(root.right));
  return Math.max(0, (root.val + sum));
}