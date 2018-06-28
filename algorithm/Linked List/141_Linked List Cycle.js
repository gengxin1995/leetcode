/**
 * Given a linked list, determine if it has a cycle in it.
 *
 * Follow up:
 * Can you solve it without using extra space?
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
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (head === null || head.next === null) return false;
    var fast = head,
        slow = head;

    while (fast && slow) {
        slow = slow.next;
        fast = fast.next;
        if (fast) {
            fast = fast.next;
        }
        if (fast === slow) {
            break;
        }
    }
    if (fast && slow && fast === slow) {
        return true;
    } else {
        return false;
    }
};