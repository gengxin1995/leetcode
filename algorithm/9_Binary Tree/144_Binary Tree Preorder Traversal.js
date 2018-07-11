/**
 * Given a binary tree, return the preorder traversal of its nodes' values.
 *
 * Example:
 * Input: [1,null,2,3]
 * 1
 *  \
 *   2
 *  /
 * 3
 * Output: [1,2,3]
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
//递归
var preorderTraversal = function(root) {
    var res = [];
    traverse(root, res);
    return res;
};

function traverse(root, res) {
    if (root) {
        res.push(root.val);
        traverse(root.left, res);
        traverse(root.right, res);
    }
}

//迭代
var preorderTraversal1 = function(root) {
    var res = [];
    var stack = [];
    if (root) stack.push(root);
    while (stack.length > 0) {
        root = stack.pop();
        res.push(root.val);
        if (root.right) stack.push(root.right);
        if (root.left) stack.push(root.left);
    }
    return res;
};