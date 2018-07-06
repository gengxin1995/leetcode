/**
 * Given a linked list, swap every two adjacent nodes and return its head.
 *
 * Example:
 * Given 1->2->3->4, you should return the list as 2->1->4->3.
 *
 * Note:
 * Your algorithm should use only constant extra space.
 * You may not modify the values in the list's nodes, only nodes itself may be changed.
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
var swapPairs = function(head) {
    var dummy = new ListNode(0);
    dummy.next = head;

    var prev = dummy, node = head;
    while (node && node.next) {
        var after = node.next;
        var nextNode = after.next;

        after.next = node;
        node.next = nextNode;
        prev.next = after;

        prev = node;
        node = nextNode;
    }
    return dummy.next;
};