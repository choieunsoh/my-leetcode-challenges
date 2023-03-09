// 108. Convert Sorted Array to Binary Search Tree
// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
const { TreeNode, createTree, preOrder } = require('../../../_utils/tree');
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
var sortedArrayToBST = function (nums, left = 0, right = nums.length - 1) {
  if (left > right) return null;
  const mid = Math.ceil((left + right) / 2);
  const root = new TreeNode(nums[mid]);
  root.left = sortedArrayToBST(nums, left, mid - 1);
  root.right = sortedArrayToBST(nums, mid + 1, right);
  return root;
};

var nums = [-10, -3, 0, 5, 9];
var expected = preOrder(createTree([0, -3, 9, -10, null, 5]));
var result = preOrder(sortedArrayToBST(nums));
console.log(result, result.join() === expected.join());

var nums = [1, 3];
var expected = preOrder(createTree([3, 1]));
var result = preOrder(sortedArrayToBST(nums));
console.log(result, result.join() === expected.join());
