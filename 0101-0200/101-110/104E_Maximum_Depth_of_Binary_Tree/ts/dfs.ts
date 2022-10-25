// https://leetcode.com/problems/maximum-depth-of-binary-tree/
// 104. Maximum Depth of Binary Tree
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { TreeNode, createTree } from '../../../../_utils/tree';
var maxDepth = function (root: TreeNode | null, depth = 0): number {
  if (!root) return depth;
  if (!root.left && !root.right) return depth + 1;
  return Math.max(
    maxDepth(root.left, depth + 1),
    maxDepth(root.right, depth + 1)
  );
};

var root = createTree([3, 9, 20, null, null, 15, 7]);
var expect = 3;
var depth = maxDepth(root);
console.log(depth, expect, depth === expect);

var root = createTree([1, null, 2]);
var expect = 2;
var depth = maxDepth(root);
console.log(depth, expect, depth === expect);
