// 99. Recover Binary Search Tree
// https://leetcode.com/problems/recover-binary-search-tree/
const { TreeNode, createTree, toLevelOrderArray } = require('../../../_utils/tree');
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
  let smallNode = null;
  let largeNode = null;
  let prev = null;
  inOrderTraverse(root);
  [smallNode.val, largeNode.val] = [largeNode.val, smallNode.val];

  function inOrderTraverse(root) {
    if (!root) return;
    inOrderTraverse(root.left);
    if (prev?.val > root.val) {
      smallNode = root;
      if (largeNode) return;
      largeNode = prev;
    }
    prev = root;
    inOrderTraverse(root.right);
  }
};

var root = createTree([1, 3, null, null, 2]);
var expected = [3, 1, null, null, 2];
recoverTree(root);
var result = toLevelOrderArray(root);
console.log(result, result.join() === expected.join());

var root = createTree([3, 1, 4, null, null, 2]);
var expected = [2, 1, 4, null, null, 3];
recoverTree(root);
var result = toLevelOrderArray(root);
console.log(result, result.join() === expected.join());
