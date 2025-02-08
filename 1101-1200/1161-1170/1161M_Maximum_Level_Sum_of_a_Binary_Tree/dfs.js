// 1161. Maximum Level Sum of a Binary Tree
// https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/
// T.C.: O(n)
// S.C.: O(n)
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
 * @return {number}
 */
var maxLevelSum = function (root) {
  const sumOfNodesAtLevel = [];
  dfs(root, 0, sumOfNodesAtLevel);

  let maxSum = -Infinity;
  let result = 0;
  for (let i = 0; i < sumOfNodesAtLevel.length; i++) {
    if (sumOfNodesAtLevel[i] > maxSum) {
      maxSum = sumOfNodesAtLevel[i];
      result = i + 1;
    }
  }
  return result;

  function dfs(node, level, sumOfNodesAtLevel) {
    if (node == null) {
      return;
    }

    if (sumOfNodesAtLevel.length == level) {
      sumOfNodesAtLevel.push(node.val);
    } else {
      sumOfNodesAtLevel[level] += node.val;
    }

    dfs(node.left, level + 1, sumOfNodesAtLevel);
    dfs(node.right, level + 1, sumOfNodesAtLevel);
  }
};

var root = createTree([1, 7, 0, 7, -8, null, null]);
var expected = 2;
var result = maxLevelSum(root);
console.log(result, result === expected);

var root = createTree([989, null, 10250, 98693, -89388, null, null, null, -32127]);
var expected = 2;
var result = maxLevelSum(root);
console.log(result, result === expected);

var root = createTree([-100, -200, -300, -20, -5, -10, null]);
var expected = 3;
var result = maxLevelSum(root);
console.log(result, result === expected);
