// 144. Binary Tree Preorder Traversal
// https://leetcode.com/problems/binary-tree-preorder-traversal/
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

var preorderTraversal = function (root: TreeNode | null): number[] {
  const result: number[] = [];
  if (!root) return [];

  const queue: TreeNode[] = [root];
  while (queue.length) {
    const node = queue.pop();
    if (node !== undefined) {
      result.push(node.val);
      if (node.right) queue.push(node.right);
      if (node.left) queue.push(node.left);
    }
  }
  return result;
};

var root = createTree([1, null, 2, null, null, 3]);
var expected = [1, 2, 3];
var result = preorderTraversal(root);
console.log(result, result.join() === expected.join());

var root = createTree([]);
var expected: number[] = [];
var result = preorderTraversal(root);
console.log(result, result.join() === expected.join());

var root = createTree([1]);
var expected = [1];
var result = preorderTraversal(root);
console.log(result, result.join() === expected.join());

var root = createTree([1, 4, 3, 2]);
var expected = [1, 4, 2, 3];
var result = preorderTraversal(root);
console.log(result, result.join() === expected.join());
