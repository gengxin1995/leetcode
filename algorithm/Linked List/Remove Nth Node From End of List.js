/**
 * Given a linked list, remove the nth node from the end of list and return its head.
 *
 * Note
 * The minimum number of nodes in list is n.
 *
 * Example
 * Given linked list: 1->2->3->4->5->null, and n = 2.
 * After removing the second node from the end, the linked list becomes 1->2->3->5->null.
 *
 * Challenge
 * O(n) time
 */

/**
 * 使用快慢指针，要注意最后删除的是否为头节点
 * @param head: The first node of linked list.
 * @param n: An integer
 * @return: The head of linked list.
 */
const removeNthFromEnd = function (head, n) {
    var list = new ListNode(0);
    list.next = head;
    var fast = list, slow = list;
    while (fast.next) {
        if (n > 0) {
            fast = fast.next;
            n--;
        } else {
            fast = fast.next;
            slow = slow.next;
        }
    }
    slow.next = slow.next.next;
    return list.next;
}
