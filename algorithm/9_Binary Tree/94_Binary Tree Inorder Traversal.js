/**
 * Given a binary tree, return the inorder traversal of its nodes' values.
 * Example:
 * Input: [1,null,2,3]
 * 1
 *  \
 *   2
 *  /
 * 3
 * Output: [1,3,2]
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
 * 1. ⾸先需要⼀直对左⼦树迭代并将⾮空节点⼊栈
 * 2. 节点指针为空后不再⼊栈
 * 3. 当前节点为空时进⾏出栈操作， 并访问栈顶节点
 * 4. 将当前指针⽤其右⼦节点替代
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    var res = [];
    var stack = [];
    var node = root;
    while (node || stack.length > 0) {
        if (node) {
            stack.push(node);
            node = node.left;
        } else {
            node = stack.pop();
            res.push(node.val);
            node = node.right;
        }
    }
    return res;
};