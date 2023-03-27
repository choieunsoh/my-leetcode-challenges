// 515. Find Largest Value in Each Tree Row
// https://leetcode.com/problems/find-largest-value-in-each-tree-row/
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
  let q = [root];
  while (q.length) {
    const qq = [];
    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < q.length; i++) {
      const node = q[i];
      max = Math.max(max, node.val);
      if (node.left) qq.push(node.left);
      if (node.right) qq.push(node.right);
    }
    q = qq;
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
