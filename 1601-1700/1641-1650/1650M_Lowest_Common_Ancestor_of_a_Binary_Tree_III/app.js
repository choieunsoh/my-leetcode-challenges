// 1650. Lowest Common Ancestor of a Binary Tree III
// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var lowestCommonAncestor = function (p, q) {
  const nodes = new Set();
  while (p) {
    nodes.add(p);
    p = p.parent;
  }
  while (q && !nodes.has(q)) {
    q = q.parent;
  }
  return q;
};
