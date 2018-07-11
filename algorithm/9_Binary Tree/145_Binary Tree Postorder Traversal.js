/**
 * Given a binary tree, return the postorder traversal of its nodes' values.
 * Example:
 * Input: [1,null,2,3]
 * 1
 *  \
 *   2
 *  /
 * 3
 * Output: [3,2,1]
 *
 * Follow up: Recursive solution is trivial, could you do it iteratively?
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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    var res = [];
    var stack = [];
    if (root) stack.push(root);
    var prev = null;

    while (stack.length > 0) {
        var node = stack[stack.length - 1];
        var noChild = (node.left == null && node.right == null);
        var childVisited = false;
        if (prev && (node.left == prev || node.right == prev)) {
            childVisited = true;
        }
        //无子节点或子节点已遍历过
        if (noChild || childVisited) {
            node = stack.pop();
            res.push(node.val);
            prev = node;
        } else {
            if (node.right) stack.push(node.right);
            if (node.left) stack.push(node.left);
        }
    }
    return res;
};