// 270. Closest Binary Search Tree Value
// https://leetcode.com/problems/closest-binary-search-tree-value/
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
 * @param {number} target
 * @return {number}
 */
var closestValue = function (root, target) {
  const nums = [];
  inorder(root, nums);

  let result = 0;
  let diff = Number.MAX_SAFE_INTEGER;
  for (const num of nums) {
    if (Math.abs(num - target) < diff) {
      diff = Math.abs(num - target);
      result = num;
    }
  }
  return result;

  function inorder(root, nums) {
    if (root == null) return;
    inorder(root.left, nums);
    nums.push(root.val);
    inorder(root.right, nums);
  }
};

var root = createTree([4, 2, 5, 1, 3]),
  target = 3.714286;
var expected = 4;
var result = closestValue(root, target);
console.log(result, result === expected);

var root = createTree([1]),
  target = 4.428571;
var expected = 1;
var result = closestValue(root, target);
console.log(result, result === expected);
