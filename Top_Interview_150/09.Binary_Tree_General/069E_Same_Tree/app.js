// 100. Same Tree
// https://leetcode.com/problems/same-tree/
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;
  if (p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

var p = [1, 2],
  q = [1, null, 2],
  expect = false;
var result = isSameTree(createTree(p), createTree(q));
console.log(result, result === expect);

var p = [1, 2, 3],
  q = [1, 2, 3],
  expect = true;
var result = isSameTree(createTree(p), createTree(q));
console.log(result, result === expect);

var p = [1, 2, 1],
  q = [1, 1, 2],
  expect = false;
var result = isSameTree(createTree(p), createTree(q));
console.log(result, result === expect);
