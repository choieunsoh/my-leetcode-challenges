// 654. Maximum Binary Tree
// https://leetcode.com/problems/maximum-binary-tree/
const { TreeNode, levelOrder } = require('../../../_utils/tree');
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  return dfs(nums);

  function dfs(nums) {
    if (nums.length === 0) return null;
    const pivotIndex = getPivot(nums);
    const leftNums = nums.slice(0, pivotIndex);
    const rightNums = nums.slice(pivotIndex + 1);

    const root = new TreeNode(nums[pivotIndex]);
    root.left = dfs(leftNums);
    root.right = dfs(rightNums);
    return root;
  }

  function getPivot(nums, left = 0, right = nums.length - 1) {
    let maxIndex = 0;
    for (let i = left; i <= right; i++) {
      if (nums[i] > nums[maxIndex]) maxIndex = i;
    }
    return maxIndex;
  }
};

function printTree(root) {
  const result = [];
  if (!root) return result;

  const queue = [root];
  while (queue.length) {
    const node = queue.shift();
    if (node) {
      result.push(node.val);
      if (node.left || node.right) {
        queue.push(node.left);
        queue.push(node.right);
      }
    } else {
      result.push(null);
    }
  }
  return result;
}

var nums = [3, 2, 1, 6, 0, 5];
var expected = [6, 3, 5, null, 2, 0, null, null, 1];
var result = levelOrder(constructMaximumBinaryTree(nums));
console.log(result, expected, result.join() === expected.join());

var nums = [3, 2, 1];
var expected = [3, null, 2, null, 1];
var result = levelOrder(constructMaximumBinaryTree(nums));
console.log(result, result.join() === expected.join());
