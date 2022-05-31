// https://leetcode.com/problems/symmetric-tree/
const { TreeNode, createTree, inOrder } = require('../../../_utils/tree');
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (root === null) return false;
  const queue = [];
  queue.push([root.left, root.right]);

  while (queue.length) {
    const [left, right] = queue.pop();

    if (left === null && right === null) continue;

    if (left === null || right === null) return false;

    if (left.val !== right.val) return false;

    queue.push([left.left, right.right]);
    queue.push([left.right, right.left]);
  }

  return true;
};

var root = createTree([1, 2, 2, 3, 4, 4, 3]);
var expected = true;
console.log(isSymmetric(root), expected);

var root = createTree([1, 2, 2, null, 3, null, 3]);
var expected = false;
console.log(isSymmetric(root), expected);

var root = createTree([1, 2, 2, 2, null, 2]);
var expected = false;
console.log(isSymmetric(root), expected);
