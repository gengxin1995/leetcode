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
//头插法
List.prototype.setPre = function (val) {
    var node = new ListNode(val)
    if (this.head.next == null) {
        this.head.next = node;
    } else {
        node.next = this.head.next;
        this.head.next = node;
    }
};
//展示链表数据
List.prototype.display = function () {
    var next = this.head.next;
    var res = [];
    while (next) {
        res.push(next.val);
        next = next.next;
    }

    console.log(res);
};
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
var deleteDuplicates = function(head) {
    var node = head;
    var hash = {};
    hash[head.val] = true;

    while (node.next) {
        if (hash.hasOwnProperty(node.next.val)) {
            node.next = node.next.next;
        } else {
            hash[node.next.val] = true;
            node = node.next;
        }
    }

    return head;
};

var arr = [12, 11, 12, 21, 41, 43, 21];

var list = new List();
for (var i = 0; i < arr.length; i++) {
    list.setNext(arr[i]);
    //list.setPre(arr[i]);
}
list.display();
var head = deleteDuplicates(list.head.next);
var next = head;
var res = [];
while (next) {
    res.push(next.val);
    next = next.next;
}

console.log(res);

