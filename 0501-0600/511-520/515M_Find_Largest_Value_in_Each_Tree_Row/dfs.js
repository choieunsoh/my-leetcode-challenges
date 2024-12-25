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
  dfs(root, 0);
  return result;

  function dfs(node, depth) {
    if (!node) return;
    if (result.length === depth) result.push(node.val);
    result[depth] = Math.max(result[depth], node.val);
    dfs(node.left, depth + 1);
    dfs(node.right, depth + 1);
  }
};

var root = createTree([1, 3, 2, 5, 3, null, 9]);
var expected = [1, 3, 9];
var result = largestValues(root);
console.log(result, result.join() === expected.join());

var root = createTree([1, 2, 3]);
var expected = [1, 3];
var result = largestValues(root);
console.log(result, result.join() === expected.join());
