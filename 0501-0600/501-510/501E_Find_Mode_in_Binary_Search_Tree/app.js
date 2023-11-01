// 501. Find Mode in Binary Search Tree
// https://leetcode.com/problems/find-mode-in-binary-search-tree/
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
var findMode = function (root) {
  let max = 0;
  const freq = new Map();
  dfs(root);
  const result = [];
  for (const [num, count] of freq) {
    if (count === max) result.push(num);
  }
  return result;

  function dfs(root) {
    if (!root) return;
    dfs(root.left);
    const count = freq.get(root.val) ?? 0;
    freq.set(root.val, count + 1);
    max = Math.max(max, count + 1);
    dfs(root.right);
  }
};

var root = [1, null, 2, null, null, 2];
var expected = [2];
var result = findMode(createTree(root));
console.log(result, result.join() === expected.join());

var root = [0];
var expected = [0];
var result = findMode(createTree(root));
console.log(result, result.join() === expected.join());
