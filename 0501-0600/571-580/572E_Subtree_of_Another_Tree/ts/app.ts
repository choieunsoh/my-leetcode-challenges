// 572. Subtree of Another Tree
// https://leetcode.com/problems/subtree-of-another-tree/
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { TreeNode, createTree } from '../../../../_utils/tree';
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
var isSubtree = function (root: TreeNode | null, subRoot: TreeNode | null): boolean {
  function sameTree(tree1: TreeNode | null, tree2: TreeNode | null): boolean {
    if (!tree1 && !tree2) return true;
    if (!tree1 || !tree2) return false;
    if (tree1.val !== tree2.val) return false;
    return sameTree(tree1.left, tree2.left) && sameTree(tree1.right, tree2.right);
  }

  if (!root || !subRoot) return false;
  if (sameTree(root, subRoot)) return true;

  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

var root = createTree([3, 4, 5, 1, 2]),
  subRoot = createTree([4, 1, 2]);
var expected = true;
var result = isSubtree(root, subRoot);
console.log(result, result === expected);

var root = createTree([3, 4, 5, 1, 2, null, null, null, null, 0]),
  subRoot = createTree([4, 1, 2]);
var expected = false;
var result = isSubtree(root, subRoot);
console.log(result, result === expected);

var root = createTree([1, 1]),
  subRoot = createTree([1]);
var expected = true;
var result = isSubtree(root, subRoot);
console.log(result, result === expected);
