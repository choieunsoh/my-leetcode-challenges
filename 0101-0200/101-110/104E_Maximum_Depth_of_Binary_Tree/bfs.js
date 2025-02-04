// 104. Maximum Depth of Binary Tree
// https://leetcode.com/problems/maximum-depth-of-binary-tree/
// T.C.: O(n)
// S.C.: O(n)
const { TreeNode, createTree, printTree } = require('../../../_utils/tree');
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
 * @return {number}
 */
function maxDepth(root) {
  if (!root) return 0;

  let maxDepth = 0;
  const queue = [];
  queue.push([root, 0]);
  while (queue.length) {
    const [node, depth] = queue.shift();
    maxDepth = Math.max(maxDepth, depth + 1);
    if (node.left) {
      queue.push([node.left, depth + 1]);
    }
    if (node.right) {
      queue.push([node.right, depth + 1]);
    }
  }
  return maxDepth;
}

var root = createTree([3, 9, 20, null, null, 15, 7]);
var expect = 3;
var depth = maxDepth(root);
console.log(depth, expect, depth === expect);

var root = createTree([1, null, 2]);
var expect = 2;
var depth = maxDepth(root);
console.log(depth, expect, depth === expect);
