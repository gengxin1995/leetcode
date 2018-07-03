/**
 * A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.
 * Return a deep copy of the list.
 */

/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
var copyRandomList = function(head) {
    if (!head) return null;
    var dummy = new RandomListNode(0);
    var curNode = dummy;
    var randomHash = {};
    while (head) {
        var newNode = new RandomListNode(head.label);
        curNode.next = newNode;
        randomHash[head] = newNode;
        newNode.random = head.random;

        head = head.next;
        curNode = curNode.next;
    }

    curNode = dummy.next;
    while (curNode) {
        if (curNode.random) {
            curNode.random = randomHash[curNode.random];
        }
        curNode = curNode.next;
    }

    return dummy.next;
};