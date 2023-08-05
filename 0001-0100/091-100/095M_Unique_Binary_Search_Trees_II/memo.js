// 95. Unique Binary Search Trees II
// https://leetcode.com/problems/unique-binary-search-trees-ii/
const { TreeNode, toLevelOrderArray } = require('../../../_utils/tree');
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
  const cache = Array.from({ length: n + 1 }, () => new Array(n + 1));
  return createTree(1, n);

  function createTree(start, end) {
    if (start > end) return [null];

    if (cache[start][end] === undefined) {
      cache[start][end] = [];
      for (let i = start; i <= end; i++) {
        const leftNodes = createTree(start, i - 1);
        const rightNodes = createTree(i + 1, end);

        for (const leftNode of leftNodes) {
          for (const rightNode of rightNodes) {
            const node = new TreeNode(i, leftNode, rightNode);
            cache[start][end].push(node);
          }
        }
      }
    }
    return cache[start][end];
  }
};

var n = 3;
var expected = [
  [1, null, 2, null, 3],
  [1, null, 3, 2],
  [2, 1, 3],
  [3, 1, null, null, 2],
  [3, 2, null, 1],
];
var result = generateTrees(n);
for (var i = 0; i < result.length; i++) {
  console.log(expected[i]);
  console.log(toLevelOrderArray(result[i]));
}
console.log(JSON.stringify(result.map(toLevelOrderArray)) === JSON.stringify(expected));

var n = 1;
var expected = [[1]];
var result = generateTrees(n);
for (var i = 0; i < result.length; i++) {
  console.log(expected[i]);
  console.log(toLevelOrderArray(result[i]));
}
console.log(JSON.stringify(result.map(toLevelOrderArray)) === JSON.stringify(expected));
