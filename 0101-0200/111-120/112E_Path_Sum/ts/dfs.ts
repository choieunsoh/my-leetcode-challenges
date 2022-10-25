// https://leetcode.com/problems/path-sum/
// 112. Path Sum
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { TreeNode, createTree } from '../../../../_utils/tree';
var hasPathSum = function (root: TreeNode | null, targetSum: number): boolean {
  if (!root) return false;
  if (root.val === targetSum && !root.left && !root.right) return true;
  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  );
};

var root = createTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]),
  targetSum = 22;
var expected = true;
var result = hasPathSum(root, targetSum);
console.log(result, result === expected);

var root = createTree([1, 2, 3]),
  targetSum = 5;
var expected = false;
var result = hasPathSum(root, targetSum);
console.log(result, result === expected);

var root = createTree([]),
  targetSum = 0;
var expected = false;
var result = hasPathSum(root, targetSum);
console.log(result, result === expected);

var root = createTree([1, 2]),
  targetSum = 1;
var expected = false;
var result = hasPathSum(root, targetSum);
console.log(result, result === expected);
