/**
 * 树节点
 * @param val
 * @param left
 * @param right
 * @constructor
 */
function TreeNode(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
}

/**
 * 二叉查找树
 * @constructor
 */
function BST() {
    this.root = null;
    this.traverse = [];
}
//插入节点
BST.prototype.insert = function (val) {
    var node = new TreeNode(val, null, null);
    if (this.root == null) {
        this.root = node;
    } else {
        var cur = this.root;
        while (true) {
            if (cur.val > val) {
                if (cur.left == null) {
                    cur.left = node;
                    break;
                }
                cur = cur.left;
            } else {
                if (cur.right == null) {
                    cur.right = node;
                    break;
                }
                cur = cur.right;
            }
        }
    }
};
//中序遍历，生成有序序列
BST.prototype.inOrder = function (node) {
    if (node == this.root) {
        this.traverse = [];
    }
    if (!(node == null)) {
        this.inOrder(node.left);
        this.traverse.push(node.val);
        this.inOrder(node.right);
    }
};
//先序遍历
BST.prototype.preOrder = function (node) {
    if (node == this.root) {
        this.traverse = [];
    }
    if (!(node == null)) {
        this.traverse.push(node.val);
        this.preOrder(node.left);
        this.preOrder(node.right);
    }
};
//后序遍历
BST.prototype.postOrder = function (node) {
    if (node == this.root) {
        this.traverse = [];
    }
    if (!(node == null)) {
        this.postOrder(node.left);
        this.postOrder(node.right);
        this.traverse.push(node.val);
    }
};
//广度优先遍历
BST.prototype.bfs = function (node) {
    var arr = [];
    if (node == this.root) {
        this.traverse = [];
        arr.push(node);
    }
    while (arr.length > 0) {
        var node1 = arr.shift();
        this.traverse.push(node1.val);
        if (node1.left) {
            arr.push(node1.left);
        }
        if (node1.right) {
            arr.push(node1.right);
        }
    }
};
//查找
BST.prototype.find = function (val) {
    var cur = this.root;
    while (true) {
        if (cur.val === val) {
            return cur;
        }
        cur = cur.val < val ? cur.right : cur.left;
        if (cur == null) {
            return null;
        }
    }
};


var arr = [18, 12, 3, 14, 25, 7, 22, 28];
var bst = new BST();
for (var i = 0; i < arr.length; i++) {
    bst.insert(arr[i]);
}
bst.inOrder(bst.root);
console.log(bst.traverse);
bst.preOrder(bst.root);
console.log(bst.traverse);
bst.postOrder(bst.root);
console.log(bst.traverse);
bst.bfs(bst.root);
console.log(bst.traverse);
//console.log(bst.find(7) ? true : false);

// var bst1 = new BST();
// bst1.inOrder(bst1.root);
// console.log(bst1.traverse);