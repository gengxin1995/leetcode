function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * 定义链表类
 * @param val
 * @constructor
 */
function List() {
    this.head = new ListNode('head');
}
//尾插法
List.prototype.setNext = function (val) {
    var node = new ListNode(val);
    var head = this.head;
    while (head.next) {
        head = head.next;
    }
    head.next = node;
    return this;
};

/**
 * Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.
 * You should preserve the original relative order of the nodes in each of the two partitions.
 *
 * Example:
 * Input: head = 1->4->3->2->5->2, x = 3
 * Output: 1->2->2->4->3->5
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    var dummyL = new ListNode(0),
        left = dummyL;
    var dummyR = new ListNode(0),
        right = dummyR;
    var node = head;

    while (node) {
        if (node.val < x) {
            left.next = node;
            left = left.next;
        } else {
            right.next = node;
            right = right.next;
        }
        node = node.next;
    }
    right.next = null;
    left.next = dummyR.next;

    return dummyL.next;
};

var arr = [1, 4, 3, 2, 5, 2];

var list = new List();
for (var i = 0; i < arr.length; i++) {
    list.setNext(arr[i]);
    //list.setPre(arr[i]);
}

var head = partition(list.head.next, 3);
var next = head;
var res = [];
while (next) {
    res.push(next.val);
    next = next.next;
}

console.log(res);
