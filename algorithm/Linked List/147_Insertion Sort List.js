/**
 * 定义单链表节点
 * @param val
 * @constructor
 */
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
 * Sort a linked list using insertion sort.
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
var insertionSortList = function(head) {
    var dummy = new ListNode(0);
    var cur = head;

    while (cur) {
        var pre = dummy;
        while (pre.next && pre.next.val < cur.val) {
            pre = pre.next;
        }
        var tmp = cur.next;
        cur.next = pre.next;
        pre.next = cur;
        cur = tmp;
    }

    return dummy.next;
};

function display(head) {
    var res = [];
    while (head) {
        res.push(head.val);
        head = head.next;
    }
    return res;
}

var arr = [-1, 5, 3, 4, 0];

var list = new List();
for (var i = 0; i < arr.length; i++) {
    list.setNext(arr[i]);
}
var head = insertionSortList(list.head.next);
console.log(display(head));
