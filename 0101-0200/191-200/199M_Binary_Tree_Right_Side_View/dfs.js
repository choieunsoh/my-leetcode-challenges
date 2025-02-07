// 199. Binary Tree Right Side View
// https://leetcode.com/problems/binary-tree-right-side-view/
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
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (!root) return [];
  const result = [];
  dfs(root, 0);
  return result;

  function dfs(node, level) {
    if (!node) return;
    if (result.length === level) result.push(node.val);
    dfs(node.right, level + 1);
    dfs(node.left, level + 1);
  }
};

var root = createTree([1, 2, 3, null, 5, null, 4]);
var expected = [1, 3, 4];
var result = rightSideView(root);
console.log(result, expected.join() === result.join());

var root = createTree([1, null, 3]);
var expected = [1, 3];
var result = rightSideView(root);
console.log(result, expected.join() === result.join());
