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
 * Given two numbers represented by two linked lists, write a function that returns sum list.
 * The sum list is linked list representation of addition of two input numbers.
 *
 * Example
 * Input:
 * First List: 5->6->3 // represents number 563
 * Second List: 8->4->2 // represents number 842
 * Output
 * Resultant list: 1->4->0->5 // represents number 1405
 *
 * Challenge
 * Not allowed to modify the lists.
 * Not allowed to use explicit extra space.
 * 先反转列表，相加，再反转
 * @param l1
 * @param l2
 */
var addTwoLists = function (l1, l2) {
    var list1 = reverse(l1);
    var list2 = reverse(l2);

    var list = new ListNode(0);
    var head = list;
    var sum = 0, tmp = 0;

    while (list1 !== null || list2 !== null || sum > 0) {
        if (list1) {
            sum += list1.val;
            list1 = list1.next;
        }
        if (list2) {
            sum += list2.val;
            list2 = list2.next;
        }
        if (sum >= 10) {
            tmp = 1;
            sum -= 10;
        }
        head.next = new ListNode(sum);
        head = head.next;

        sum = tmp;
        tmp = 0;
    }
    head = reverse(list.next);
    return head;
}

function reverse(head) {
    var node = head;
    var pre = null, next = null;

    while (node) {
        next = node.next;
        node.next = pre;
        pre = node;
        node = next;
    }
    return pre;
}

function display(head) {
    var next = head;
    var res = [];
    while (next) {
        res.push(next.val);
        next = next.next;
    }

    console.log(res);
}
var arr1 = [5, 6, 3];

var list1 = new List();
for (var i = 0; i < arr1.length; i++) {
    list1.setNext(arr1[i]);
    //list.setPre(arr[i]);
}

var arr2 = [8, 4, 2];
var list2 = new List();
for (var i = 0; i < arr2.length; i++) {
    list2.setNext(arr2[i]);
    //list.setPre(arr[i]);
}
display(addTwoLists(list1.head.next, list2.head.next));
