// https://leetcode.com/problems/two-sum-iv-input-is-a-bst/
// 653. Two Sum IV - Input is a BST
const { createTree, TreeNode } = require('../../../_utils/tree');
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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
  function inOrder(root) {
    if (!root) return [];
    return [...inOrder(root.left), root.val, ...inOrder(root.right)];
  }

  const nums = inOrder(root);
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum === k) return true;
    sum < k ? left++ : right--;
  }

  return false;
};

var root = [5, 3, 6, 2, 4, null, 7],
  k = 9;
var expected = true;
console.log(findTarget(createTree(root), k), expected);

var root = [5, 3, 6, 2, 4, null, 7],
  k = 28;
var expected = false;
console.log(findTarget(createTree(root), k), expected);
