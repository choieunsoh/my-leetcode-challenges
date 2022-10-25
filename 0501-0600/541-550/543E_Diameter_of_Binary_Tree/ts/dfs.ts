// https://leetcode.com/problems/diameter-of-binary-tree/
// 543. Diameter of Binary Tree
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { TreeNode, createTree } from '../../../../_utils/tree';
var diameterOfBinaryTree = function (root: TreeNode | null): number {
  if (!root) return 0;
  let maxDepth = 0;
  getDepth(root);
  return maxDepth;

  function getDepth(root: TreeNode | null): number {
    if (!root) return 0;
    const leftDepth = getDepth(root.left);
    const rightDepth = getDepth(root.right);
    maxDepth = Math.max(maxDepth, leftDepth + rightDepth);
    return Math.max(leftDepth, rightDepth) + 1;
  }
};

var root = createTree([1, 2, 3, 4, 5]);
var expected = 3;
var result = diameterOfBinaryTree(root);
console.log(result, result === expected);

var root = createTree([1, 2]);
var expected = 1;
var result = diameterOfBinaryTree(root);
console.log(result, result === expected);

var root = createTree([1]);
var expected = 0;
var result = diameterOfBinaryTree(root);
console.log(result, result === expected);
