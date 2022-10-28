// 572. Subtree of Another Tree
// https://leetcode.com/problems/subtree-of-another-tree/
const { TreeNode, createTree } = require('../../../_utils/tree');
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  if (!root || !subRoot) return false;
  if (isSameTree(root, subRoot)) return true;

  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);

  function isSameTree(root1, root2) {
    if (!root1 && !root2) return true;
    if (!root1 || !root2) return false;
    if (root1.val !== root2.val) return false;
    return (
      isSameTree(root1.left, root2.left) && isSameTree(root1.right, root2.right)
    );
  }
};

var root = [3, 4, 5, 1, 2],
  subRoot = [4, 1, 2];
var expected = true;
var result = isSubtree(createTree(root), createTree(subRoot));
console.log(result, result === expected);

var root = [3, 4, 5, 1, 2, null, null, null, null, 0],
  subRoot = [4, 1, 2];
var expected = false;
var result = isSubtree(createTree(root), createTree(subRoot));
console.log(result, result === expected);

var root = [1, 1],
  subRoot = [1];
var expected = true;
var result = isSubtree(createTree(root), createTree(subRoot));
console.log(result, result === expected);
