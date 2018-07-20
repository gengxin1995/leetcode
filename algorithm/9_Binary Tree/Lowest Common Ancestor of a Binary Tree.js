/**
 * Given the root and two nodes in a Binary Tree. Find the lowest common ancestor(LCA) of the two nodes.
 * The lowest common ancestor is the node with largest depth which is the ancestor of both nodes.
 * Example:
 * For the following binary tree:
 *    4
 *   / \
 *  3   7
 *     / \
 *    5   6
 * LCA(3, 5) = 4
 * LCA(5, 6) = 7
 * LCA(6, 7) = 7
 */

/**
 * @param root
 * @param A
 * @param B
 */
var lowestCommonAncestor = function (root, A, B) {
  if (root == null) return null;
  var lNode = lowestCommonAncestor(root.left, A, B);
  var rNode = lowestCommonAncestor(root.right, A, B);

  if (lNode != null && rNode != null) return root
  if (root == A || root == B) return root;
  return (lNode != null) ? lNode : rNode;
}