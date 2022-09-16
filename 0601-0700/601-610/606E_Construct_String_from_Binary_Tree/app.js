// https://leetcode.com/problems/construct-string-from-binary-tree/
// 606. Construct String from Binary Tree
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
 * @return {string}
 */
var tree2str = function (root) {
  function dfs(node) {
    if (!node) return '';
    let str = `(${node.val}`;
    if (node.left) str += dfs(node.left);
    if (node.right) {
      if (!node.left) str += '()';
      str += dfs(node.right);
    }
    str += ')';
    return str;
  }
  const str = dfs(root);
  return str.slice(1, -1);
};

var root = [1, 2, 3, 4];
var expected = '1(2(4))(3)';
var result = tree2str(createTree(root));
console.log(result, expected, result === expected);

var root = [1, 2, 3, null, 4];
var expected = '1(2()(4))(3)';
var result = tree2str(createTree(root));
console.log(result, expected, result === expected);
