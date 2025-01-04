// 116. Populating Next Right Pointers in Each Node
// https://leetcode.com/problems/populating-next-right-pointers-in-each-node/
// T.C.: O(n)
// S.C.: O(1)
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

  let leftmost = root;
  while (leftmost.left !== null) {
    let head = leftmost;
    while (head !== null) {
      head.left.next = head.right;
      if (head.next !== null) {
        head.right.next = head.next.left;
      }
      head = head.next;
    }
    leftmost = leftmost.left;
  }
  return root;
};

var root = createTree([1, 2, 3, 4, 5, 6, 7]);
var expected = [1, '#', 2, 3, '#', 4, 5, 6, 7, '#'];
var result = connect(root);
printTree(result, 'level');
console.log(result, expected.join());
