// https://leetcode.com/problems/binary-tree-paths/
// 257. Binary Tree Paths
const { createTree, TreeNode } = require('../../../_utils/tree');
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
 * @return {string[]}
 */
var binaryTreePaths = function (root, tree = '') {
  function buildPath(root, result = [], path = '') {
    if (root === null) return result;
    if (root.left === null && root.right === null) {
      path += root.val;
      result.push(path);
      path = '';
    }
    path += root.val + '->';
    buildPath(root.left, result, path);
    buildPath(root.right, result, path);

    return result;
  }

  return buildPath(root, [], '');
};

var root = [1, 2, 3, null, 5];
var expected = ['1->2->5', '1->3'];
var result = binaryTreePaths(createTree(root));
console.log(result, result.join() === expected.join());

var root = [1];
var expected = ['1'];
var result = binaryTreePaths(createTree(root));
console.log(result, result.join() === expected.join());
