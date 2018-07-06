/**
 * Reverse a linked list from position m to n. Do it in one-pass.
 *
 * Note: 1 ≤ m ≤ n ≤ length of list.
 *
 * Example:
 * Input: 1->2->3->4->5->NULL, m = 2, n = 4
 * Output: 1->4->3->2->5->NULL
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    var dummy = new ListNode(0);
    dummy.next = head;

    var prenode = dummy;
    for (var i = 1; i < m; i++) {
        prenode = prenode.next;
    }

    var pre = null,
        next = null,
        cur = prenode.next;
    while (cur && (m <= n)) {
        next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
        m++;
    }
    prenode.next.next = cur;
    prenode.next = pre;

    return dummy.next;
};