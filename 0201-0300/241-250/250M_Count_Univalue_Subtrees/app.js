// 250. Count Univalue Subtrees
// https://leetcode.com/problems/count-univalue-subtrees/
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
 * @return {number}
 */
var countUnivalSubtrees = function (root) {
  let result = 0;
  traverse(root);
  return result;

  function traverse(root) {
    if (!root) return true;

    const left = traverse(root.left);
    const right = traverse(root.right);

    if (!left || !right) return false;

    if (root.left && root.left.val !== root.val) {
      return false;
    }
    if (root.right && root.right.val !== root.val) {
      return false;
    }

    result++;
    return true;
  }
};

var root = createTree([5, 1, 5, 5, 5, null, 5]);
var expected = 4;
var result = countUnivalSubtrees(root);
console.log(result, result === expected);

var root = createTree([]);
var expected = 0;
var result = countUnivalSubtrees(root);
console.log(result, result === expected);

var root = createTree([5, 5, 5, 5, 5, null, 5]);
var expected = 6;
var result = countUnivalSubtrees(root);
console.log(result, result === expected);
