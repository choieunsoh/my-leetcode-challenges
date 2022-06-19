// https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/
// 117. Populating Next Right Pointers in Each Node II
const { TreeNode, createTree, printTree } = require('../../../_utils/tree');
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (!root) return null;

  function findNext(node) {
    while (node) {
      if (node.left) return node.left;
      if (node.right) return node.right;
      node = node.next;
    }
    return null;
  }

  if (root.left) {
    root.left.next = root.right ?? findNext(root.next);
  }

  if (root.right) {
    root.right.next = findNext(root.next);
  }

  root.left && connect(root.left);
  root.right && connect(root.right);

  return root;
};

var root = createTree([1, 2, 3, 4, 5, null, 7]);
var expected = [1, '#', 2, 3, '#', 4, 5, 7, '#'];
var result = connect(root);
printTree(result, 'level');
console.log(expected.join(' '));
