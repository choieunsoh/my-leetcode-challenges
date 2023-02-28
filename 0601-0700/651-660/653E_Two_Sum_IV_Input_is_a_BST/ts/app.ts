// 653. Two Sum IV - Input is a BST
// https://leetcode.com/problems/two-sum-iv-input-is-a-bst/
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
var findTarget = function (root: TreeNode | null, k: number): boolean {
  if (!root) return false;
  const nums = new Set();
  const q = [root];
  while (q.length) {
    const node = q.pop()!;
    const target = k - node.val;
    if (nums.has(target)) return true;
    nums.add(node.val);
    if (node.left) q.push(node.left);
    if (node.right) q.push(node.right);
  }
  return false;
};

var root = [5, 3, 6, 2, 4, null, 7],
  k = 9;
var expected = true;
var result = findTarget(createTree(root), k);
console.log(result, result === expected);

var root = [5, 3, 6, 2, 4, null, 7],
  k = 28;
var expected = false;
var result = findTarget(createTree(root), k);
console.log(result, result === expected);
