// 515. Find Largest Value in Each Tree Row
// https://leetcode.com/problems/find-largest-value-in-each-tree-row/
// T.C.: O(n)
// S.C.: O(n)
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
 * @return {number[]}
 */
var largestValues = function (root) {
  if (!root) return [];
  const result = [];
  let queue = [root];
  while (queue.length) {
    const nextQueue = [];
    let max = Number.MIN_SAFE_INTEGER;
    for (const node of queue) {
      max = Math.max(max, node.val);
      if (node.left) nextQueue.push(node.left);
      if (node.right) nextQueue.push(node.right);
    }
    queue = nextQueue;
    result.push(max);
  }
  return result;
};

var root = createTree([1, 3, 2, 5, 3, null, 9]);
var expected = [1, 3, 9];
var result = largestValues(root);
console.log(result, result.join() === expected.join());

var root = createTree([1, 2, 3]);
var expected = [1, 3];
var result = largestValues(root);
console.log(result, result.join() === expected.join());
