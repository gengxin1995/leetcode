/**
 * Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.
 *
 * Example:
 * Input:
 * [
 * 1->4->5,
 * 1->3->4,
 * 2->6
 * ]
 * Output: 1->1->2->3->4->4->5->6
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (lists.length === 0) {
        return null;
    }
    return helper(lists, 0, lists.length - 1);
};

function helper(lists, start, end) {
    if (start === end) {
        return lists[start];
    } else if (start + 1 === end) {
        return mergeTwoLists(lists[start], lists[end]);
    }

    var left = helper(lists, start, start + ~~((end - start) / 2));
    var right = helper(lists, start + ~~((end - start) / 2) + 1, end);

    return mergeTwoLists(left, right);
}

function mergeTwoLists(left, right) {
    var dummy = new ListNode(0);
    var cur = dummy;

    while (left && right) {
        if (left.val < right.val) {
            cur.next = left;
            left = left.next;
        } else {
            cur.next = right;
            right = right.next;
        }
        cur = cur.next;
    }

    cur.next = left ? left : right;

    return dummy.next;
}
