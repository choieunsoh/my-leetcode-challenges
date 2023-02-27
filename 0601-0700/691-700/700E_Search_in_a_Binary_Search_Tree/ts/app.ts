// 700. Search in a Binary Search Tree
// https://leetcode.com/problems/search-in-a-binary-search-tree/
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { TreeNode, createTree, preOrder } from '../../../../_utils/tree';
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
var searchBST = function (root: TreeNode | null, val: number): TreeNode | null {
  if (!root) return null;
  if (root.val === val) return root;
  if (val < root.val) return searchBST(root.left, val);
  return searchBST(root.right, val);
};

var root = createTree([4, 2, 7, 1, 3]),
  val = 2,
  expected = [2, 1, 3];
var result = preOrder(searchBST(root, val));
console.log(result, result.join() === expected.join());

var root = createTree([4, 2, 7, 1, 3]),
  val = 5,
  expected: number[] = [];
var result = preOrder(searchBST(root, val));
console.log(result, result.join() === expected.join());
