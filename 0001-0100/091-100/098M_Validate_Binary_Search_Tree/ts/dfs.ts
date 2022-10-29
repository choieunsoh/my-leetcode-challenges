// https://leetcode.com/problems/validate-binary-search-tree/
// 98. Validate Binary Search Tree
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { TreeNode, createTree, levelOrder } from '../../../../_utils/tree';
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

var isValidBST = function (
  root: TreeNode | null,
  min = -Infinity,
  max = Infinity
): boolean {
  if (!root) return true;
  if (root.val <= min || root.val >= max) return false;

  return (
    isValidBST(root.left, min, root.val) &&
    isValidBST(root.right, root.val, max)
  );
};

var root = createTree([2, 1, 3]);
var expected = true;
var result = isValidBST(root);
console.log(result, result === expected);

var root = createTree([2, 2, 2]);
var expected = false;
var result = isValidBST(root);
console.log(result, result === expected);

var root = createTree([5, 1, 4, null, null, 3, 6]);
var expected = false;
var result = isValidBST(root);
console.log(result, result === expected);

var root = createTree([5, 4, 6, null, null, 3, 7]);
var expected = false;
var result = isValidBST(root);
console.log(result, result === expected);
console.log(root);
