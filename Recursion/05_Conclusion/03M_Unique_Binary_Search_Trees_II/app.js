// https://leetcode.com/problems/unique-binary-search-trees-ii/
// 95. Unique Binary Search Trees II
const { TreeNode } = require('../../../_utils/tree');
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  function createTree(start, end) {
    if (start > end) return [null];

    const nodes = [];
    for (let i = start; i <= end; i++) {
      const leftNodes = createTree(start, i - 1);
      const rightNodes = createTree(i + 1, end);

      leftNodes.forEach((leftNode) => {
        rightNodes.forEach((rightNode) => {
          const node = new TreeNode(i, leftNode, rightNode);
          nodes.push(node);
        });
      });
    }
    return nodes;
  }

  return createTree(1, n);
};
