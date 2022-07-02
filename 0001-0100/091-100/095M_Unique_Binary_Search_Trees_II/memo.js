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
  const cache = Array(n + 1)
    .fill()
    .map(() => Array(n + 1).fill());

  function createTree(start, end) {
    if (start > end) return [null];

    if (cache[start][end] === undefined) {
      cache[start][end] = [];
      for (let i = start; i <= end; i++) {
        const leftNodes = createTree(start, i - 1);
        const rightNodes = createTree(i + 1, end);

        leftNodes.forEach((leftNode) => {
          rightNodes.forEach((rightNode) => {
            const node = new TreeNode(i, leftNode, rightNode);
            cache[start][end].push(node);
          });
        });
      }
    }
    return cache[start][end];
  }

  return createTree(1, n);
};
