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
const connect = function (root) {
  populate(root, [], 0);
  return root;
};

const populate = function (node, last, depth) {
  if (!node) return;

  if (last.length > depth) {
    node.next = last[depth];
    last[depth] = node;
  } else {
    last.push(node);
  }

  populate(node.right, last, depth + 1);
  populate(node.left, last, depth + 1);
};

var root = createTree([1, 2, 3, 4, 5, null, 7]);
var expected = [1, '#', 2, 3, '#', 4, 5, 7, '#'];
var result = connect(root);
printTree(result, 'level');
console.log(expected.join(' '));
