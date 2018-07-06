/**
 * Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.
 *
 * Example 1:
 * Input: 1->2->3->3->4->4->5
 * Output: 1->2->5
 *
 * Example 2:
 * Input: 1->1->1->2->3
 * Output: 2->3
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
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    var dummy = new ListNode(0);
    dummy.next = head;
    var node = new ListNode();
    node = dummy;

    while (node.next && node.next.next) {
        if (node.next.val === node.next.next.val) {
            var val = node.next.val;
            while (node.next && node.next.val === val) {
                node.next = node.next.next;
            }
        } else {
            node = node.next;
        }
    }
    return dummy.next;
};