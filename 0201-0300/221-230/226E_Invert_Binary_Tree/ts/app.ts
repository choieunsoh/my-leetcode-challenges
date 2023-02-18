// 226. Invert Binary Tree
// https://leetcode.com/problems/invert-binary-tree/
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
var invertTree = function (root: TreeNode | null): TreeNode | null {
  if (!root) return null;
  [root.left, root.right] = [root.right, root.left];
  invertTree(root.left);
  invertTree(root.right);
  return root;
};

var root = [4, 2, 7, 1, 3, 6, 9];
var expected = [4, 7, 2, 9, 6, 3, 1];
var result = invertTree(createTree(root));
var expected1: number[] = levelOrder(createTree(expected));
var result1: number[] = levelOrder(result);
console.log(result1, result1.join() === expected1.join());

var root = [2, 1, 3];
var expected = [2, 3, 1];
var result = invertTree(createTree(root));
var expected1: number[] = levelOrder(createTree(expected));
var result1: number[] = levelOrder(result);
console.log(result1, result1.join() === expected1.join());

var root: number[] = [];
var expected: number[] = [];
var result = invertTree(createTree(root));
var expected1: number[] = levelOrder(createTree(expected));
var result1: number[] = levelOrder(result);
console.log(result1, result1.join() === expected1.join());
