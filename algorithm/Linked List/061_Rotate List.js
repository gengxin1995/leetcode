/**
 * Given a linked list, rotate the list to the right by k places, where k is non-negative.
 *
 * Example:
 * Input: 1->2->3->4->5->NULL, k = 2
 * Output: 4->5->1->2->3->NULL
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head) return head;
    var fast = head,
        slow = head;
    var len = 1;
    for (len = 1; fast.next && len <= k; len++) {
        fast = fast.next;
    }

    if (len <= k) {
        k = k % len;
        fast = head;
        for (var i = 0; i < k; i++) {
            fast = fast.next;
        }
    }

    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }

    fast.next = head;
    head = slow.next;
    slow.next = null;

    return head;
};