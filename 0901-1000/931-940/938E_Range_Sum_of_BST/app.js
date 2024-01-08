// 938. Range Sum of BST
// https://leetcode.com/problems/range-sum-of-bst/description/
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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
  if (!root) return 0;

  const rootValue = root.val >= low && root.val <= high ? root.val : 0;
  const leftSum = rangeSumBST(root.left, low, high);
  const rightSum = rangeSumBST(root.right, low, high);
  return leftSum + rootValue + rightSum;
};

var root = [10, 5, 15, 3, 7, null, 18],
  low = 7,
  high = 15;
var expected = 32;
var result = rangeSumBST(createTree(root), low, high);
console.log(result, result === expected);

var root = [10, 5, 15, 3, 7, 13, 18, 1, null, 6],
  low = 6,
  high = 10;
var expected = 23;
var result = rangeSumBST(createTree(root), low, high);
console.log(result, result === expected);
