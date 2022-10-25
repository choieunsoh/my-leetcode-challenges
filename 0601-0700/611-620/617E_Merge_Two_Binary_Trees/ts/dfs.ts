// 617. Merge Two Binary Trees
// https://leetcode.com/problems/merge-two-binary-trees/
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { TreeNode, createTree, levelOrder } from '../../../../_utils/tree';
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
var mergeTrees = function (
  root1: TreeNode | null,
  root2: TreeNode | null
): TreeNode | null {
  if (!root1 && !root2) return null;
  if (!root1) return root2;
  if (!root2) return root1;

  root1.val += root2.val;
  root1.left = mergeTrees(root1.left, root2.left);
  root1.right = mergeTrees(root1.right, root2.right);
  return root1;
};

type Value617 = (number | null)[];

var root1: Value617 = [1, 3, 2, 5],
  root2: Value617 = [2, 1, 3, null, 4, null, 7];
var expected: Value617 = [3, 4, 5, 5, 4, null, 7];
var result = mergeTrees(createTree(root1), createTree(root2));
var resultTree = levelOrder(result);
var expectedTree = levelOrder(createTree(expected));
console.log(resultTree, resultTree.join() === expectedTree.join());

var root1: Value617 = [1],
  root2: Value617 = [1, 2];
var expected: Value617 = [2, 2];
var result = mergeTrees(createTree(root1), createTree(root2));
var resultTree = levelOrder(result);
var expectedTree = levelOrder(createTree(expected));
console.log(resultTree, resultTree.join() === expectedTree.join());
