/**
 * Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).
 *
 * For example:
 * Given binary tree [3,9,20,null,null,15,7],
 *      3
 *     / \
 *    9  20
 *      /  \
 *     15   7
 * return its bottom-up level order traversal as:
 * [
 * [15,7],
 * [9,20],
 * [3]
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
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    var res = [];
    if (!root) return res;
    var stack = [];
    var queue = [];
    queue.push(root);
    while (queue.length > 0) {
        var len = queue.length;
        var arr = [];
        for (var i = 0; i < len; i++) {
            var node = queue.shift();
            arr.push(node.val);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        stack.push(arr);
    }
    while (stack.length > 0) {
        res.push(stack.pop());
    }
    return res;
};