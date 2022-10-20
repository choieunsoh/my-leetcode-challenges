// 637. Average of Levels in Binary Tree
// https://leetcode.com/problems/average-of-levels-in-binary-tree/
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

function averageOfLevels(root: TreeNode | null): number[] {
  const result: number[] = [];
  if (!root) return result;

  const queue: TreeNode[] = [root];
  while (queue.length > 0) {
    const count = queue.length;
    let sum = 0;
    for (let i = 0; i < count; i++) {
      const node = queue.shift();
      if (node) {
        sum += node.val;
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
    }
    result.push(sum / count);
  }

  return result;
}

var root: (number | null)[] = [3, 9, 20, null, null, 15, 7];
var expected = [3, 14.5, 11];
var result = averageOfLevels(createTree(root));
console.log(result, expected, result.join() === expected.join());

var root: (number | null)[] = [3, 9, 20, 15, 7];
var expected = [3.0, 14.5, 11.0];
var result = averageOfLevels(createTree(root));
console.log(result, expected, result.join() === expected.join());
