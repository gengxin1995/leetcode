/**
 * Given inorder and postorder traversal of a tree, construct the binary tree.
 * Note:
 * You may assume that duplicates do not exist in the tree.
 * For example, given
 * inorder = [9,3,15,20,7]
 * postorder = [9,15,7,20,3]
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  return dfs(inorder.length - 1, 0, inorder.length - 1);

  function dfs(index, startPos, endPos) {
    if (startPos > endPos) return null;

    var node = new TreeNode(postorder[index]);
    var pos = inorder.indexOf(postorder[index], startPos);

    node.left = dfs(index - (endPos - pos) - 1, startPos, pos - 1);
    node.right = dfs(index - 1, pos + 1, endPos);

    return node;
  }
};