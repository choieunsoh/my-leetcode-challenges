// 2236. Root Equals Sum of Children
// https://leetcode.com/problems/root-equals-sum-of-children/description/
// T.C.: O(1)
// S.C.: O(1)
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @typedef {Object} TreeNode
 * @property {number} val
 * @property {TreeNode} left
 * @property {TreeNode} right
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var checkTree = function (root) {
  return root.val === root.left.val + root.right.val;
};

var root = [10, 4, 6];
var root = {
  val: 10,
  left: {
    val: 4,
  },
  right: {
    val: 6,
  },
};
var expected = true;
var result = checkTree(root);
console.log(result, result === expected);

var root = [5, 3, 1];
var root = {
  val: 5,
  left: {
    val: 3,
  },
  right: {
    val: 1,
  },
};
var expected = false;
var result = checkTree(root);
console.log(result, result === expected);
