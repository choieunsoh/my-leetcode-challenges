// 863. All Nodes Distance K in Binary Tree
// https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/
const { TreeNode, createTree, printTree } = require('../../../_utils/tree');
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function (root, target, k) {
  if (!root) return [];

  const result = [];
  const parentMap = new Map();
  dfs(root);

  const seen = new Set();

  function findNodes(node, distance) {
    if (!node) return;
    if (seen.has(node)) return;
    if (distance === k) result.push(node.val);

    seen.add(node);

    findNodes(node.left, distance + 1);
    findNodes(node.right, distance + 1);
    findNodes(parentMap.get(node), distance + 1);
  }

  function dfs(node) {
    if (!node) return;

    if (node.left) {
      parentMap.set(node.left, node);
      dfs(node.left);
    }
    if (node.right) {
      parentMap.set(node.right, node);
      dfs(node.right);
    }
  }

  findNodes(target, 0);
  return result;
};

var root = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4],
  target = [5, 6, 2, null, null, 7, 4],
  k = 2;
var expected = [7, 4, 1];
var result = distanceK(createTree(root), createTree(target), k);
console.log(result, result.join() === expected.join());

var root = [1],
  target = 1,
  k = 3;
var expected = [];
var result = distanceK(createTree(root), target, k);
console.log(result, result.join() === expected.join());
