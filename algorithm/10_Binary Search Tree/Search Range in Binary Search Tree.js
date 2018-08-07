/**
 * Given a binary search tree and a range [k1, k2], return all elements in the given range.
 *
 * Example
 * If k1 = 10 and k2 = 22, then your function should return [12, 20, 22].
 *      20
 *     /  \
 *    8   22
 *   / \
 * 4   12
 */
/**
 * @param root: param root: The root of the binary search tree
 * @param k1: An integer
 * @param k2: An integer
 * @return: return: Return all keys that k1<=key<=k2 in ascending order
 */
const searchRange = function (root, k1, k2) {
  var res = [];
  var stack = [];
  var node = root;
  while (node || stack.length > 0) {
    if (node) {
      stack.push(node);
      node = node.left;
    } else {
      node = stack.pop();
      if (node.val >= k1 && node.val <= k2) {
        res.push(node.val);
      }
      node = node.right;
    }
  }
  return res;
}
