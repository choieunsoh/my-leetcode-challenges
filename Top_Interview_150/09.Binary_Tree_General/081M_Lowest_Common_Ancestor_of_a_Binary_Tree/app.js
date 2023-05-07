// 236. Lowest Common Ancestor of a Binary Tree
// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
const { TreeNode, createTree } = require('../../../_utils/tree');
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (!root) return null;
  if (root.val === p.val || root.val === q.val) return root;

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  if (left && right) return root;
  if (left) return left;
  return right;
};

var root = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4],
  p = [5, 6, 2, null, null, 6, 4],
  q = [1, 0, 8],
  expected = 3;
var result = lowestCommonAncestor(createTree(root), createTree(p), createTree(q));
console.log(result?.val, result?.val === expected);

var root = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4],
  p = [5, 6, 2, null, null, 6, 4],
  q = [4],
  expected = 5;
var result = lowestCommonAncestor(createTree(root), createTree(p), createTree(q));
console.log(result?.val, result?.val === expected);

var root = [1, 2],
  p = [1, 2],
  q = [2],
  expected = 1;
var result = lowestCommonAncestor(createTree(root), createTree(p), createTree(q));
console.log(result?.val, result?.val === expected);
