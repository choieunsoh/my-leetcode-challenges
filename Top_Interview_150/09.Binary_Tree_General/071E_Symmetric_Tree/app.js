// 101. Symmetric Tree
// https://leetcode.com/problems/symmetric-tree/
const { TreeNode, createTree, inOrder } = require('../../../_utils/tree');
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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (root === null) return false;

  return symmetricCheck(root.left, root.right);

  function symmetricCheck(root1, root2) {
    if (!root1 && !root2) return true;
    if (!root1 || !root2) return false;
    if (root1.val !== root2.val) return false;
    return symmetricCheck(root1.left, root2.right) && symmetricCheck(root1.right, root2.left);
  }
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
