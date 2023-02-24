// 94. Binary Tree Inorder Traversal
// https://leetcode.com/problems/binary-tree-inorder-traversal/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { TreeNode, createTree } from '../../../../_utils/tree';
var inorderTraversal = function (root: TreeNode | null): number[] {
  const result: number[] = [];

  function dfs(node: TreeNode | null): void {
    if (!node) return;
    dfs(node.left);
    result.push(node.val);
    dfs(node.right);
  }

  dfs(root);
  return result;
};

var root = createTree([1, null, 2, null, null, 3]);
var expected = [1, 3, 2];
var result = inorderTraversal(root);
console.log(result, result.join() === expected.join());

var root = createTree([]);
var expected: number[] = [];
var result = inorderTraversal(root);
console.log(result, result.join() === expected.join());

var root = createTree([1]);
var expected = [1];
var result = inorderTraversal(root);
console.log(result, result.join() === expected.join());
