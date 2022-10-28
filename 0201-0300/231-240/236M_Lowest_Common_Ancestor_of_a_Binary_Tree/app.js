// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
// 236. Lowest Common Ancestor of a Binary Tree
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
  let ancestor = null;

  function traverse(node) {
    if (!node) return false;

    const root = node.val === p || node.val === q ? 1 : 0;

    const left = traverse(node.left) ? 1 : 0;
    const right = traverse(node.right) ? 1 : 0;

    if (left + right + root >= 2) {
      ancestor = node;
    }

    return root + left + right > 0;
  }

  traverse(root);
  return ancestor;
};

var root = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4],
  p = [5, 6, 2, null, null, 6, 4],
  q = [1, 0, 8],
  expected = 3;
var result = lowestCommonAncestor(
  createTree(root),
  createTree(p),
  createTree(q)
);
console.log(result?.val, expected);

var root = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4],
  p = [5, 6, 2, null, null, 6, 4],
  q = [4],
  expected = 5;
var result = lowestCommonAncestor(
  createTree(root),
  createTree(p),
  createTree(q)
);
console.log(result?.val, expected);

var root = [1, 2],
  p = [1, 2],
  q = [2],
  expected = 1;
var result = lowestCommonAncestor(
  createTree(root),
  createTree(p),
  createTree(q)
);
console.log(result?.val, expected);
