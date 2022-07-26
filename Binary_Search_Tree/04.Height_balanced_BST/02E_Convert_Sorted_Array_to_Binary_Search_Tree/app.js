// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
// 108. Convert Sorted Array to Binary Search Tree
const { TreeNode, printTree } = require('../../../_utils/tree');
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
  const node = new TreeNode(nums[mid]);
  node.left = sortedArrayToBST(nums, left, mid - 1);
  node.right = sortedArrayToBST(nums, mid + 1, right);
  return node;
};

var nums = [-10, -3, 0, 5, 9];
var expect = [0, -3, 9, -10, null, 5];
var result = sortedArrayToBST(nums);
console.log(printTree(result));
console.log(expect);

var nums = [1, 3];
var expect = [3, 1];
var result = sortedArrayToBST(nums);
console.log(printTree(result));
console.log(expect);
