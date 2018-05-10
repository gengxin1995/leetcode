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
    if (node.left)
        this.inOrder(node.left);
    this.traverse.push(node.val);
    if (node.right)
        this.inOrder(node.right);
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


var arr = [8, 12, 3, 14, 25, 7];
var bst = new BST();
for (var i = 0; i < arr.length; i++) {
    bst.insert(arr[i]);
}
bst.inOrder(bst.root);
console.log(bst.traverse);
console.log(bst.find(7) ? true : false);

