// 145. Binary Tree Postorder Traversal
// https://leetcode.com/problems/binary-tree-postorder-traversal/
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
var postorderTraversal = function (root: TreeNode | null): number[] {
  function dfs(node: TreeNode | null): void {
    if (!node) return;
    dfs(node.left);
    dfs(node.right);
    result.push(node.val);
  }
  const result: number[] = [];
  dfs(root);
  return result;
};

var root = createTree([1, null, 2, null, null, 3]);
var expected = [3, 2, 1];
var result = postorderTraversal(root);
console.log(result, result.join() === expected.join());

var root = createTree([]);
var expected: number[] = [];
var result = postorderTraversal(root);
console.log(result, result.join() === expected.join());

var root = createTree([1]);
var expected = [1];
var result = postorderTraversal(root);
console.log(result, result.join() === expected.join());
