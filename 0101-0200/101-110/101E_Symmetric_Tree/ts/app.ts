// 101. Symmetric Tree
// https://leetcode.com/problems/symmetric-tree/
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
var isSymmetric = function (root: TreeNode | null): boolean {
  if (root === null) return false;

  function symmetric(node1: TreeNode | null, node2: TreeNode | null): boolean {
    if (node1 === null && node2 === null) return true;
    if (node1 === null || node2 === null) return false;
    if (node1.val !== node2.val) return false;

    const symmetricLeft = symmetric(node1.left, node2.right);
    const symmetricRight = symmetric(node1.right, node2.left);
    return symmetricLeft && symmetricRight;
  }

  return symmetric(root.left, root.right);
};

var root = createTree([1, 2, 2, 3, 4, 4, 3]);
var expected = true;
var result = isSymmetric(root);
console.log(result, result === expected);

var root = createTree([1, 2, 2, null, 3, null, 3]);
var expected = false;
var result = isSymmetric(root);
console.log(result, result === expected);

var root = createTree([1, 2, 2, 2, null, 2]);
var expected = false;
var result = isSymmetric(root);
console.log(result, result === expected);
