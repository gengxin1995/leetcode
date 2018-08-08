/**
 * Given a singly linked list where elements are sorted in ascending order, convert it to a height balanced BST.
 * For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
var sortedArrayToBST = function(nums) {
  return helper(0, nums.length - 1);

  function helper(start, end) {
    if (start > end) return null;

    var mid = ~~((start + end) / 2);
    var node = new TreeNode(nums[mid]);
    node.left = helper(start, mid - 1);
    node.right = helper(mid + 1, end);

    return node;
  }
};
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
  var res = [];
  while (head) {
    res.push(head.val);
    head = head.next;
  }
  return sortedArrayToBST(res);
};
