/**
 * Sort a linked list in O(n log n) time using constant space complexity.
 *
 * Example 1:
 * Input: 4->2->1->3
 * Output: 1->2->3->4
 *
 * Example 2:
 * Input: -1->5->3->4->0
 * Output: -1->0->3->4->5
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 归并排序
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    if (!head || !head.next) return head;

    var mid = findMid(head);
    var head1 = head;
    var head2 = mid.next;
    mid.next = null;
    var left = sortList(head1);
    var right = sortList(head2);
    return mergeList(left, right);
};

function findMid(head) {
    if (!head) return null;

    var fast = head.next,
        slow = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
}

function mergeList(head1, head2) {
    var dummy = new ListNode(0);
    var head = dummy;
    while (head1 && head2) {
        if (head1.val < head2.val) {
            head.next = head1;
            head1 = head1.next;
        } else {
            head.next = head2;
            head2 = head2.next;
        }
        head = head.next;
    }
    head.next = head1 ? head1 : head2;

    return dummy.next;
}









