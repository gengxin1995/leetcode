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
//在给定节点后添加节点
List.prototype.addNode = function (val1, val2) {
    var node = new ListNode(val2);
    var cur = this.head.next;
    while (cur) {
        if (cur.val === val1) {
            node.next = cur.next;
            cur.next = node;
            return;
        } else {
            cur = cur.next;
        }
    }
}
//删除节点
List.prototype.deleteNode = function (val) {
    var pre = this.head,
        cur = this.head.next;
    while (cur) {
        if (cur.val === val) {
            pre.next = pre.next.next;
            return;
        } else {
            cur = cur.next;
            pre = pre.next;
        }
    }
};
//链表反转
List.prototype.reverseList = function() {
    var head = this.head.next;
    var pre = null, next = null;
    while (head) {
        next = head.next;
        head.next = pre;
        pre = head;
        head = next;
    }
    this.head = pre;
};
//判断单链表是否有环
List.prototype.hasCircle = function () {
    //快慢指针
    var fast = this.head,
        slow = this.head;
    while (fast && slow) {
        fast = fast.next;
        slow = slow.next;
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
//找出未知长度的单链表的中间节点
List.prototype.findMiddle = function () {
    var fast = this.head,
        slow = this.head;
    while (fast && slow) {
        fast = fast.next;
        slow = slow.next;
        if (fast) {
            fast = fast.next;
        }
        if (!fast || !(fast.next)) {
            break;
        }
    }
    return slow.val;
};

// var arr = [1, 2, 3, 4, 5];
//
// var list = new List();
// for (var i = 0; i < arr.length; i++) {
//     list.setNext(arr[i]);
//     //list.setPre(arr[i]);
// }

//list.setNext(new ListNode(1)).setNext(new ListNode(2)).setNext(new ListNode(3)).dispaly();

// 让单链表存在环
// var head = list.head.next;
// while (head.next) {
//     head = head.next;
// }
// head.next = list.head.next
//list.deleteNode(1)
//list.addNode(2, 6);
//console.log(list.hasCircle());
//console.log(list.findMiddle());
//list.reverseList();
//list.display();
module.exports = List;