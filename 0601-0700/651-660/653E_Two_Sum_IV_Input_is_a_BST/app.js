// https://leetcode.com/problems/two-sum-iv-input-is-a-bst/
// 653. Two Sum IV - Input is a BST
// BFS - Breadth First Search
const { createTree, TreeNode } = require('../../../_utils/tree');
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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
  const stack = [root];
  const set = new Set();
  while (stack.length) {
    const node = stack.pop();
    if (set.has(k - node.val)) return true;
    set.add(node.val);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  return false;
};

var root = [5, 3, 6, 2, 4, null, 7],
  k = 9;
var expected = true;
console.log(findTarget(createTree(root), k), expected);

var root = [5, 3, 6, 2, 4, null, 7],
  k = 28;
var expected = false;
console.log(findTarget(createTree(root), k), expected);
