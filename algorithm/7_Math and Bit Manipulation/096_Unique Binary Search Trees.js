/**
 * Given n, how many structurally unique BST's (binary search trees) that store values 1 ... n?
 *
 * Example:
 * Input: 3
 * Output: 5
 * Explanation:
 * Given n = 3, there are a total of 5 unique BST's:
 * 1         3     3      2      1
 *  \       /     /      / \      \
 *   3     2     1      1   3      2
 *  /     /       \                 \
 * 2     1         2                 3
 */
/**
 * 以i作为根节点，其不重复BST个数等于左子树的BST个数乘上右子树的BST个数
 * BST个数只与有序序列的大小有关，而与具体值没有关系
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    if (n < 1) {
        return -1;
    }
    var count = [];
    count[0] = 1;
    for (var i = 1; i < n + 1; i++) {
        count[i] = 0;
    }
    for (var i = 1; i < n + 1; i++) {
        for (var j = 0; j < i; j++) {
            count[i] += count[j] * count[i - j - 1]
        }
    }
    return count[n];
};
console.log(numTrees(3));