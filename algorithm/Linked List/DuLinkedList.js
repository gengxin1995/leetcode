/**
 * 定义双向链表节点
 * @param val
 * @constructor
 */
function DListNode(val) {
    this.val = val;
    this.next = null;
    this.pre = null;
}

/**
 * 定义链表类
 * @constructor
 */
function DList() {
    this.head = new DListNode('head');
}

//创建链表
DList.prototype.setPre = function (node) {
    if (this.head.next == null) {
        this.head.next = node;
        node.pre = this.head;
    } else {
        node.next = this.head.next;
        this.head.next.pre = node;
        this.head.next = node;
        node.pre = this.head;
    }
};
//展示链表数据
DList.prototype.display = function () {
    var next = this.head.next;
    while (next) {
        console.log(next.val);
        next = next.next;
    }
};
//删除节点
DList.prototype.deleteNode = function (val) {
    var cur = this.head.next;
    while (cur) {
        if (cur.val === val) {
            cur.pre.next = cur.next;
            cur.next.pre = cur.pre;
            return;
        } else {
            cur = cur.next;
        }
    }
};

var arr = [1, 2, 3, 4, 5];

var dlist = new DList();
for (var i = 0; i < arr.length; i++) {
    dlist.setPre(new DListNode(arr[i]));
}
//dlist.deleteNode(3);
dlist.display();