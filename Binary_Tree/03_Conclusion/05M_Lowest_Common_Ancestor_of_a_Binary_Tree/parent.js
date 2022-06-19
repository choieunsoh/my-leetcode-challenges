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
  const parents = new Map();
  parents.set(root, null);
  const queue = [root];

  while (queue.length) {
    const count = queue.length;
    for (let i = 0; i < count; i++) {
      const node = queue.shift();
      if (node.left) {
        parents.set(node.left.val, node);
        queue.push(node.left);
      }
      if (node.right) {
        parents.set(node.right.val, node);
        queue.push(node.right);
      }
    }
  }

  const ancestors = new Map();
  while (p) {
    ancestors.set(p.val, p);
    p = parents.get(p.val);
  }

  let ancestor = q;
  while (ancestor && !ancestors.has(ancestor.val)) {
    ancestor = parents.get(ancestor.val);
  }

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
