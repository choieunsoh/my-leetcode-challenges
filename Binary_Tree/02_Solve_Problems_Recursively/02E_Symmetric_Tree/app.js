// https://leetcode.com/problems/symmetric-tree/
// 101. Symmetric Tree
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

  const symmetricCheck = (left, right) => {
    if (left === null && right === null) return true;
    if (left === null || right === null) return false;
    if (left.val !== right.val) return false;
    return (
      symmetricCheck(left.left, right.right) &&
      symmetricCheck(left.right, right.left)
    );
  };

  return symmetricCheck(root.left, root.right);
};

var root = createTree([1, 2, 2, 3, 4, 4, 3]);
var expected = true;
console.log(isSymmetric(root), expected);

var root = createTree([1, 2, 2, null, 3, null, 3]);
var expected = false;
console.log(isSymmetric(root), expected);

var root = createTree([1, 2, 2, 2, null, 2]);
var expected = false;
console.log(isSymmetric(root), expected);
