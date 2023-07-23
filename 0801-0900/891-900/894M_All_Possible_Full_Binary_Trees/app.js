// 894. All Possible Full Binary Trees
// https://leetcode.com/problems/all-possible-full-binary-trees/
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
var allPossibleFBT = function (n, memo = new Map()) {
  if (n % 2 === 0) return [];
  if (n === 1) return [new TreeNode()];
  if (memo.has(n)) return memo.get(n);

  const result = [];
  for (let i = 1; i < n; i += 2) {
    const left = allPossibleFBT(i, memo);
    const right = allPossibleFBT(n - i - 1, memo);
    for (const l of left) {
      for (const r of right) {
        const root = new TreeNode(0, l, r);
        result.push(root);
      }
    }
  }

  memo.set(n, result);
  return result;
};

var n = 7;
var expected = [
  [0, 0, 0, null, null, 0, 0, null, null, 0, 0],
  [0, 0, 0, null, null, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, null, null, null, null, 0, 0],
  [0, 0, 0, 0, 0, null, null, 0, 0],
];
var result = allPossibleFBT(n);
var result2 = result.map(toLevelOrderArray);
console.log(result2, result2.join() === expected.join());

var n = 3;
var expected = [[0, 0, 0]];
var result = allPossibleFBT(n);
var result2 = result.map(toLevelOrderArray);
console.log(result2, result2.join() === expected.join());
