// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
// 235. Lowest Common Ancestor of a Binary Search Tree
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { TreeNode, createTree } from '../../../../_utils/tree';
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

var lowestCommonAncestor = function (
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (!root) return null;
  if (root.val === p?.val || root.val === q?.val) return root;
  if (root.val > p?.val && root.val < q?.val) return root;
  if (root.val > q?.val && root.val < p?.val) return root;

  if (root.val > p?.val && root.val > q?.val) {
    return lowestCommonAncestor(root.left, p, q);
  }

  return lowestCommonAncestor(root.right, p, q);
};

var root = [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5],
  p = 2,
  q = 8;
var expected = 6;
var result = lowestCommonAncestor(
  createTree(root),
  createTree([p]),
  createTree([q])
);
console.log(result, expected, result?.val === expected);

var root = [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5],
  p = 2,
  q = 4;
var expected = 2;
var result = lowestCommonAncestor(
  createTree(root),
  createTree([p]),
  createTree([q])
);
console.log(result, expected, result?.val === expected);

var root: (number | null)[] = [2, 1],
  p = 2,
  q = 1;
var expected = 2;
var result = lowestCommonAncestor(
  createTree(root),
  createTree([p]),
  createTree([q])
);
console.log(result, expected, result?.val === expected);
