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
var maxDepth = function(root) {
    if (root == null) {
        return 0;
    }

    var left_depth = maxDepth(root.left);
    var right_depth = maxDepth(root.right);

    return Math.max(left_depth, right_depth) + 1;
};