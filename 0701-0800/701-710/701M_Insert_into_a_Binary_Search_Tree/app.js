// https://leetcode.com/problems/insert-into-a-binary-search-tree/
// 701. Insert into a Binary Search Tree
const {
  TreeNode,
  createTree,
  inOrder,
  levelOrder,
} = require('../../../_utils/tree');
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
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
var root = [4, 2, 7, 1, 3],
  val = 5;
var expected = [4, 2, 7, 1, 3, 5];
var result = insertIntoBST(createTree(root), val);
var temp = inOrder(result);
console.log(temp, temp.join() === inOrder(createTree(expected)).join());

var root = [40, 20, 60, 10, 30, 50, 70],
  val = 25;
var expected = [40, 20, 60, 10, 30, 50, 70, null, null, 25];
var result = insertIntoBST(createTree(root), val);
var temp = inOrder(result);
console.log(temp, temp.join() === inOrder(createTree(expected)).join());

var root = [4, 2, 7, 1, 3, null, null, null, null, null, null],
  val = 5;
var expected = [4, 2, 7, 1, 3, 5];
var result = insertIntoBST(createTree(root), val);
var temp = inOrder(result);
console.log(temp, temp.join() === inOrder(createTree(expected)).join());
