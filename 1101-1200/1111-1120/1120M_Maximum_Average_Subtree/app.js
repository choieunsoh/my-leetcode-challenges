// 1120. Maximum Average Subtree
// https://leetcode.com/problems/maximum-average-subtree/
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
 * @return {number}
 */
var maximumAverageSubtree = function (root) {
  const [, , result] = dfs(root);
  return result;

  function dfs(root) {
    if (!root) return [0, 0, 0];

    const [leftSum, leftCount, leftAvg] = dfs(root.left);
    const [rightSum, rightCount, rightAvg] = dfs(root.right);
    const sum = leftSum + root.val + rightSum;
    const count = leftCount + 1 + rightCount;
    const avg = sum / count;
    const maxAvg = Math.max(leftAvg, avg, rightAvg);
    return [sum, count, maxAvg];
  }
};

var root = [5, 6, 1];
var expected = 6.0;
var result = maximumAverageSubtree(createTree(root));
console.log(result, result === expected);

var root = [0, null, 1];
var expected = 1.0;
var result = maximumAverageSubtree(createTree(root));
console.log(result, result === expected);
