// 437. Path Sum III
// https://leetcode.com/problems/path-sum-iii/
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
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  if (!root) return 0;
  const prefixSum = new Map();
  prefixSum.set(0, 1);
  return dfs(root, 0);

  function dfs(root, currSum) {
    if (root === null) return 0;
    currSum += root.val;

    const targetNum = currSum - targetSum;
    let count = prefixSum.get(targetNum) ?? 0;
    prefixSum.set(currSum, (prefixSum.get(currSum) ?? 0) + 1);
    count += dfs(root.left, currSum);
    count += dfs(root.right, currSum);
    prefixSum.set(currSum, prefixSum.get(currSum) - 1);
    return count;
  }
};

var root = [10, 5, -3, 3, 2, null, 11, 3, -2, null, 1],
  targetSum = 8;
var expected = 3;
var result = pathSum(createTree(root), targetSum);
console.log(result, expected, result === expected);

var root = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1],
  targetSum = 22;
var expected = 3;
var result = pathSum(createTree(root), targetSum);
console.log(result, expected, result === expected);
