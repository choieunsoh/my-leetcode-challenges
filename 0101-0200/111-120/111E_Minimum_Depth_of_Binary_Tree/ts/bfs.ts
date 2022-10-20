// 111. Minimum Depth of Binary Tree
// https://leetcode.com/problems/minimum-depth-of-binary-tree/

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

var minDepth = function (root: TreeNode | null): number {
  if (!root) return 0;

  let level = 1;
  const queue = [root];
  while (queue.length) {
    const count = queue.length;
    for (let i = 0; i < count; i++) {
      const node = queue.shift();
      if (node) {
        if (!node.left && !node.right) return level;
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
    }
    level++;
  }
  return level;
};

var root: (number | null)[] = [3, 9, 20, null, null, 15, 7];
var expect = 2;
var depth = minDepth(createTree(root));
console.log(depth, expect, depth === expect);

var root: (number | null)[] = [2, null, 3, null, 4, null, 5, null, 6];
var expect = 5;
var depth = minDepth(createTree(root));
console.log(depth, expect, depth === expect);

var root: (number | null)[] = [1, 2, 3, 4, null, null, 5];
var expect = 3;
var depth = minDepth(createTree(root));
console.log(depth, expect, depth === expect);
