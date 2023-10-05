// 1448. Count Good Nodes in Binary Tree
// https://leetcode.com/problems/count-good-nodes-in-binary-tree/
// T.C.: O(n)
// S.C.: O(log n)
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
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function (root) {
  dfs(root, root.val);
  return dfs(root, root.val);

  function dfs(root, max) {
    let count = 0;
    if (!root) return count;

    if (root.val >= max) {
      max = root.val;
      count = 1;
    }

    count += dfs(root.left, max);
    count += dfs(root.right, max);
    return count;
  }
};

var root = [3, 1, 4, 3, null, 1, 5];
var expected = 4;
var result = goodNodes(createTree(root));
console.log(result, result === expected);

var root = [3, 3, null, 4, 2];
var expected = 3;
var result = goodNodes(createTree(root));
console.log(result, result === expected);

var root = [1];
var expected = 1;
var result = goodNodes(createTree(root));
console.log(result, result === expected);
