// https://leetcode.com/problems/binary-tree-level-order-traversal-ii/
// 102. Binary Tree Level Order Traversal
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

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];
  const result: number[][] = [];
  const queue = [root];
  while (queue.length) {
    const size = queue.length;
    const level: number[] = [];
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      if (node) {
        level.push(node.val);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
    }
    result.push(level);
  }

  return result;
}

var root = createTree([3, 9, 20, null, null, 15, 7]);
var expected = [[3], [9, 20], [15, 7]];
var result = levelOrder(root);
console.log(result, result.join() === expected.join());

var root = createTree([1]);
var expected = [[1]];
var result = levelOrder(root);
console.log(result, result.join() === expected.join());

var root = createTree([]);
var expected: number[][] = [];
var result = levelOrder(root);
console.log(result, result.join() === expected.join());

var root = createTree([1, 2, 3, 4, null, null, 5]);
var expected = [[1], [2, 3], [4, 5]];
var result = levelOrder(root);
console.log(result, result.join() === expected.join());
