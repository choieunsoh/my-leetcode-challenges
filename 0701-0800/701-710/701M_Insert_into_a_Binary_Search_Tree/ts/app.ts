// 701. Insert into a Binary Search Tree
// https://leetcode.com/problems/insert-into-a-binary-search-tree/
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { TreeNode, createTree, inOrder } from '../../../../_utils/tree';
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
var insertIntoBST = function (root: TreeNode | null, val: number): TreeNode | null {
  if (!root) {
    return new TreeNode(val);
  }
  if (val < root.val) {
    root.left = insertIntoBST(root.left, val);
  } else {
    root.right = insertIntoBST(root.right, val);
  }
  return root;
};

var root: (number | null)[] = [4, 2, 7, 1, 3],
  val = 5;
var expected: (number | null)[] = [4, 2, 7, 1, 3, 5];
var result = insertIntoBST(createTree(root), val);
var temp = inOrder(result);
console.log(temp, temp.join() === inOrder(createTree(expected)).join());

var root: (number | null)[] = [40, 20, 60, 10, 30, 50, 70],
  val = 25;
var expected: (number | null)[] = [40, 20, 60, 10, 30, 50, 70, null, null, 25];
var result = insertIntoBST(createTree(root), val);
var temp = inOrder(result);
console.log(temp, temp.join() === inOrder(createTree(expected)).join());

var root: (number | null)[] = [4, 2, 7, 1, 3, null, null, null, null, null, null],
  val = 5;
var expected: (number | null)[] = [4, 2, 7, 1, 3, 5];
var result = insertIntoBST(createTree(root), val);
var temp = inOrder(result);
console.log(temp, temp.join() === inOrder(createTree(expected)).join());
