/**
 * Given a singly linked list L: L0→L1→…→Ln-1→Ln,
 * reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…
 *
 * You may not modify the values in the list's nodes, only nodes itself may be changed.
 *
 * Example 1:
 * Given 1->2->3->4, reorder it to 1->4->2->3.
 *
 * Example 2:
 * Given 1->2->3->4->5, reorder it to 1->5->2->4->3.
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if (!head || !head.next) return;

    var slow = head,
        fast = head.next;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next
    }
    var rHead = slow.next;
    slow.next = null;

    var prev = null,
        next = null;
    while (rHead) {
        next = rHead.next;
        rHead.next = prev;
        prev = rHead;
        rHead = next;
    }

    rHead = prev;
    var lHead = head;
    while (rHead && lHead) {
        var tmp = lHead.next;
        lHead.next = rHead;
        rHead = rHead.next;
        lHead.next.next = tmp;
        lHead = tmp;
    }
};