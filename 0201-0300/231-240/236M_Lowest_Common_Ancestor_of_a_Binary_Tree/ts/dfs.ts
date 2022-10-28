// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
// 236. Lowest Common Ancestor of a Binary Tree
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
  const parents = new Map<number, TreeNode | null>();
  dfs(root, null);

  const ancestors = new Map<number, TreeNode>();
  while (p) {
    ancestors.set(p.val, p);
    p = parents.get(p.val) ?? null;
  }

  let ancestor = q;
  while (ancestor && !ancestors.has(ancestor.val)) {
    ancestor = parents.get(ancestor.val) ?? null;
  }
  return ancestor;

  function dfs(node: TreeNode | null, parent: TreeNode | null): void {
    if (!node) return;
    parents.set(node.val, parent);
    if (node.left) {
      dfs(node.left, node);
    }
    if (node.right) {
      dfs(node.right, node);
    }
  }
};

var root = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4],
  p = [5, 6, 2, null, null, 6, 4],
  q = [1, 0, 8],
  expected = 3;
var result = lowestCommonAncestor(
  createTree(root),
  createTree(p),
  createTree(q)
);
console.log(result?.val, result?.val === expected);

var root = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4],
  p = [5, 6, 2, null, null, 6, 4],
  q = [4],
  expected = 5;
var result = lowestCommonAncestor(
  createTree(root),
  createTree(p),
  createTree(q)
);
console.log(result?.val, result?.val === expected);

var root: (number | null)[] = [1, 2],
  p: (number | null)[] = [1, 2],
  q = [2],
  expected = 1;
var result = lowestCommonAncestor(
  createTree(root),
  createTree(p),
  createTree(q)
);
console.log(result?.val, result?.val === expected);
