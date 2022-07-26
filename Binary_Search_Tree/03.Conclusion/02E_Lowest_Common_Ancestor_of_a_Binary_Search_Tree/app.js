// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
// 235. Lowest Common Ancestor of a Binary Search Tree
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
  if (root.val > p.val && root.val < q.val) return root;
  if (root.val > q.val && root.val < p.val) return root;

  if (root.val > p.val && root.val > q.val)
    return lowestCommonAncestor(root.left, p, q);

  return lowestCommonAncestor(root.right, p, q);
};

var root = [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5],
  p = 2,
  q = 8;
var expected = 6;
var result = lowestCommonAncestor(
  createTree(root),
  createTree([p]),
  createTree([q])
);
console.log(result, expected, result?.val === expected);

var root = [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5],
  p = 2,
  q = 4;
var expected = 2;
var result = lowestCommonAncestor(
  createTree(root),
  createTree([p]),
  createTree([q])
);
console.log(result, expected, result?.val === expected);

var root = [2, 1],
  p = 2,
  q = 1;
var expected = 2;
var result = lowestCommonAncestor(
  createTree(root),
  createTree([p]),
  createTree([q])
);
console.log(result, expected, result?.val === expected);
