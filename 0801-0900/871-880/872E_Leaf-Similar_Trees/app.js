// 872. Leaf-Similar Trees
// https://leetcode.com/problems/leaf-similar-trees/
// T.C.: O(n)
// S.C.: O(n)
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  const nodes1 = [];
  const nodes2 = [];
  dfs(root1, nodes1);
  dfs(root2, nodes2);
  return nodes1.length === nodes2.length && nodes1.every((num, index) => num === nodes2[index]);

  function dfs(root, nodes) {
    if (!root) return;
    if (!root.left && !root.right) {
      nodes.push(root.val);
    }
    dfs(root.left, nodes);
    dfs(root.right, nodes);
  }
};

var root1 = [3, 5, 1, 6, 2, 9, 8, null, null, 7, 4],
  root2 = [3, 5, 1, 6, 7, 4, 2, null, null, null, null, null, null, 9, 8];
var expected = true;
var result = leafSimilar(createTree(root1), createTree(root2));
console.log(result, result === expected);

var root1 = [1, 2, 3],
  root2 = [1, 3, 2];
var expected = false;
var result = leafSimilar(createTree(root1), createTree(root2));
console.log(result, result === expected);

var root1 = [3, 5, 1, 6, 2, 9, 8, null, null, 7, 4],
  root2 = [3, 5, 1, 6, 7, 4, 2, null, null, null, null, null, null, 9, 11, null, null, 8, 10];
var expected = false;
var result = leafSimilar(createTree(root1), createTree(root2));
console.log(result, result === expected);
