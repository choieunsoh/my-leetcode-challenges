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

  const queue = [root];
  while (queue.length) {
    const count = queue.length;
    let nextNode = null;
    for (let i = 0; i < count; i++) {
      const node = queue.shift();
      node.next = nextNode;

      node.right && queue.push(node.right);
      node.left && queue.push(node.left);

      nextNode = node;
    }
  }

  return root;
};

var root = createTree([1, 2, 3, 4, 5, null, 7]);
var expected = [1, '#', 2, 3, '#', 4, 5, 7, '#'];
var result = connect(root);
printTree(result, 'level');
console.log(expected.join(' '));
