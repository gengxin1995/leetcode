/**
 * Remove all elements from a linked list of integers that have value val.
 *
 * Example:
 * Input:  1->2->6->3->4->5->6, val = 6
 * Output: 1->2->3->4->5
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    var dummy = new ListNode(0);
    dummy.next = head;
    var node = dummy;

    while (node.next) {
        if (node.next.val === val) {
            node.next = node.next.next;
        } else {
            node = node.next;
        }
    }

    return dummy.next;
};