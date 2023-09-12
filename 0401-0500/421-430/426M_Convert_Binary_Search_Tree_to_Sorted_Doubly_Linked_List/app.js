// 426. Convert Binary Search Tree to Sorted Doubly Linked List
// https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/
const { TreeNode, createTree } = require('../../../_utils/tree');
/**
 * // Definition for a Node.
 * function Node(val, left, right) {
 *      this.val = val;
 *      this.left = left;
 *      this.right = right;
 *  };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {
  if (!root) return null;
  let head = null;
  let tail = null;
  traverse(root);
  head.left = tail;
  tail.right = head;
  return head;

  function traverse(node) {
    if (!node) return;
    traverse(node.left);
    if (tail) {
      tail.right = node;
      node.left = tail;
    } else {
      head = node;
    }
    tail = node;
    traverse(node.right);
  }
};

var inOrder = function (root) {
  const result = [];
  const tail = root.left;
  tail.right = null;
  root.left = null;

  const helper = (node) => {
    if (!node) return;

    result.push(node.val);
    helper(node.right);
  };
  helper(root);

  return result;
};

var root = createTree([4, 2, 5, 1, 3]);
var expected = [1, 2, 3, 4, 5];
var result = inOrder(treeToDoublyList(root));
console.log(result, result.join() === expected.join());

var root = createTree([2, 1, 3]);
var expected = [1, 2, 3];
var result = inOrder(treeToDoublyList(root));
console.log(result, result.join() === expected.join());
