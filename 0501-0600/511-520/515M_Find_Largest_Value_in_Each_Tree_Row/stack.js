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
  const stack = [[root, 0]];
  while (stack.length) {
    const [node, depth] = stack.pop();
    if (result.length === depth) result.push(node.val);
    result[depth] = Math.max(result[depth], node.val);
    if (node.right) stack.push([node.right, depth + 1]);
    if (node.left) stack.push([node.left, depth + 1]);
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
