/**
 * Given preorder and inorder traversal of a tree, construct the binary tree.
 * Note:
 * You may assume that duplicates do not exist in the tree.
 * For example, given
 * preorder = [3,9,20,15,7]
 * inorder = [9,3,15,20,7]
 * Return the following binary tree:
 *    3
 *   / \
 *  9  20
 *    /  \
 *   15   7
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  return dfs(0, 0, preorder.length - 1);

  function dfs(index, startPos, endPos) {
    if (startPos > endPos) return null;

    var node = new TreeNode(preorder[index]);
    var pos = inorder.indexOf(preorder[index], startPos);

    node.left = dfs(index + 1, startPos, pos - 1);
    node.right = dfs(index + pos - startPos + 1, pos + 1, endPos);

    return node;
  }
};