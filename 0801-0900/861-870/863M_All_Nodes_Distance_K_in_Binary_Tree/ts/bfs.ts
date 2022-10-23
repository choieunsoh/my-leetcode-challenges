// 863. All Nodes Distance K in Binary Tree
// https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/
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
var distanceK = function (
  root: TreeNode | null,
  target: TreeNode | null,
  k: number
): number[] {
  if (!root) return [];

  const parentMap = new Map<TreeNode, TreeNode>();
  dfs(root);

  const seen = new Set<TreeNode>();
  const queue: [TreeNode | null, number][] = [[target, 0]];
  while (queue.length) {
    const q = queue.shift();
    if (!q || !q[0]) continue;

    const [node, distance] = q;
    seen.add(node);

    if (distance === k) {
      const result = [node.val];
      for (let i = 0; i < queue.length; i++) {
        const [n] = queue[i];
        if (n) result.push(n.val);
      }
      return result;
    }

    if (node.left && !seen.has(node.left)) {
      queue.push([node.left, distance + 1]);
    }
    if (node.right && !seen.has(node.right)) {
      queue.push([node.right, distance + 1]);
    }

    const parent = parentMap.get(node);
    if (parent && !seen.has(parent)) {
      queue.push([parent, distance + 1]);
    }
  }

  function dfs(node: TreeNode | null) {
    if (!node) return;

    if (node.left) {
      parentMap.set(node.left, node);
      dfs(node.left);
    }
    if (node.right) {
      parentMap.set(node.right, node);
      dfs(node.right);
    }
  }

  return [];
};

var root = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4],
  target = [5, 6, 2, null, null, 7, 4],
  k = 2;
var expected = [7, 4, 1];
var result = distanceK(createTree(root), createTree(target), k);
console.log(result, result.join() === expected.join());

var root: (number | null)[] = [1],
  target: (number | null)[] = [1],
  k = 3;
var expected: number[] = [];
var result = distanceK(createTree(root), createTree(target), k);
console.log(result, result.join() === expected.join());
