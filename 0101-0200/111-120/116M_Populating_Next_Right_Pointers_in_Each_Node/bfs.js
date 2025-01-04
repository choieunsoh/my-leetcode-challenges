// 116. Populating Next Right Pointers in Each Node
// https://leetcode.com/problems/populating-next-right-pointers-in-each-node/
// T.C.: O(n)
// S.C.: O(n)
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

  let queue = [root];
  while (queue.length) {
    const nextQueue = [];
    for (let i = 0; i < queue.length; i++) {
      const node = queue[i];
      if (i < queue.length - 1) {
        node.next = queue[i + 1];
      }
      if (node.left) nextQueue.push(node.left);
      if (node.right) nextQueue.push(node.right);
    }
    queue = nextQueue;
  }
  return root;
};

var root = createTree([1, 2, 3, 4, 5, 6, 7]);
var expected = [1, '#', 2, 3, '#', 4, 5, 6, 7, '#'];
var result = connect(root);
printTree(result, 'level');
console.log(result, expected.join());
