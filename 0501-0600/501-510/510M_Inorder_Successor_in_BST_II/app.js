// 510. Inorder Successor in BST II
// https://leetcode.com/problems/inorder-successor-in-bst-ii/description/
// T.C.: O(log n)
// S.C.: O(1)
/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var inorderSuccessor = function (node) {
  // the successor is somewhere lower in the right subtree
  if (node.right) {
    node = node.right;
    while (node.left) {
      node = node.left;
    }
    return node;
  }

  // the successor is somewhere upper in the tree
  while (node.parent && node.parent.right === node) {
    node = node.parent;
  }
  return node.parent;
};

var tree = [2, 1, 3],
  node = 1;
var expected = 2;

var tree = [5, 3, 6, 2, 4, null, null, 1],
  node = 6;
var expected = null;
