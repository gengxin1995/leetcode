/**
 * Given a binary tree, determine if it is a valid binary search tree (BST).
 * Assume a BST is defined as follows:
 * The left subtree of a node contains only nodes with keys less than the node's key.
 * The right subtree of a node contains only nodes with keys greater than the node's key.
 * Both the left and right subtrees must also be binary search trees.
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
 * @return {boolean}
 */
var isValidBST = function(root) {
  if (!root) return true;
  return helper(root, -Infinity, Infinity);
};

function helper(root, lower, upper) {
  if (!root) return true;

  if (root.val >= upper || root.val <= lower) return false;
  var isLeftBST = helper(root.left, lower, root.val);
  var isRightBST = helper(root.right, root.val, upper);

  return isLeftBST && isRightBST;
}
