/**
 * Given a singly linked list, determine if it is a palindrome.
 *
 * Example 1:
 * Input: 1->2
 * Output: false
 *
 * Example 2:
 * Input: 1->2->2->1
 * Output: true
 *
 * Follow up:
 * Could you do it in O(n) time and O(1) space?
 */

var List = require('../1_Data Structure/Linked List/SinglyLinkedList');
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 找到中点，翻转链表的后半部分，逐个比较前后部分的节点值，最后复原链表（翻转链表后半部分）
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (!head || !head.next) return true;

    var slow = head,
        fast = head.next;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    var newHead = reverse(slow.next);
    var lCur = head,
        rCur = newHead;
    while (rCur) {
        if (lCur.val !== rCur.val) {
            reverse(newHead);
            return false;
        }
        lCur = lCur.next;
        rCur = rCur.next;
    }
    return true;
};

function reverse(head) {
    var prev = null,
        next = null;
    while (head) {
        next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
}

var arr = [1, 2, 2, 1];

var list = new List();
for (var i = 0; i < arr.length; i++) {
    list.setNext(arr[i]);
}
list.display();

console.log(isPalindrome(list.head.next));








