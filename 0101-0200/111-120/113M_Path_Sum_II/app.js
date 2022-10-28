// 113. Path Sum II
// https://leetcode.com/problems/path-sum-ii/
const { TreeNode, createTree } = require('../../../_utils/tree');
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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  const result = [];
  dfs(root, [], targetSum);
  return result;

  function dfs(node, paths, sum) {
    if (!node) return;
    if (!node.left && !node.right) {
      if (sum === node.val) {
        result.push([...paths, node.val]);
      }
      return;
    }

    dfs(node.left, [...paths, node.val], sum - node.val);
    dfs(node.right, [...paths, node.val], sum - node.val);
  }
};

var root = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, null, 5, 1],
  targetSum = 22;
var expected = [
  [5, 4, 11, 2],
  [5, 8, 4, 5],
];
var result = pathSum(createTree(root), targetSum);
console.log(result, result.join() === expected.join());

var root = [1, 2, 3],
  targetSum = 5;
var expected = [];
var result = pathSum(createTree(root), targetSum);
console.log(result, result.join() === expected.join());

var root = [1, 2],
  targetSum = 0;
var expected = [];
var result = pathSum(createTree(root), targetSum);
console.log(result, result.join() === expected.join());
