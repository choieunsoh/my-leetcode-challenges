// https://leetcode.com/problems/populating-next-right-pointers-in-each-node/
// 116. Populating Next Right Pointers in Each Node
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
const connect = (root) => {
  if (!root) return null;
  if (root.left && root.right) {
    root.left.next = root.right;
  }
  if (root.right && root.next) {
    root.right.next = root.next.left;
  }

  if (root.left) {
    root.left = connect(root.left);
  }
  if (root.right) {
    root.right = connect(root.right);
  }
  return root;
};

var root = createTree([1, 2, 3, 4, 5, 6, 7]);
var expected = [1, '#', 2, 3, '#', 4, 5, 6, 7, '#'];
var result = connect(root);
printTree(result, 'level');
console.log(expected.join(' '));
