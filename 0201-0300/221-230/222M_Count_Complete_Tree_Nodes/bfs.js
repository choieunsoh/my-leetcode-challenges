// 222. Count Complete Tree Nodes
// https://leetcode.com/problems/count-complete-tree-nodes/
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
var countNodes = function (root) {
  if (!root) return 0;
  let result = 1;
  let q = [root];
  while (q.length) {
    const qq = [];
    for (let i = 0; i < q.length; i++) {
      const node = q[i];
      if (!node.left) return result;
      qq.push(node.left);
      result++;

      if (!node.right) return result;
      qq.push(node.right);
      result++;
    }
    q = qq;
  }
  return result;
};

var root = [1, 2, 3, 4, 5, 6];
var expected = 6;
var result = countNodes(createTree(root));
console.log(result, result === expected);

var root = [1, 2, 3, 4, null, 6];
var expected = 4;
var result = countNodes(createTree(root));
console.log(result, result === expected);

var root = [];
var expected = 0;
var result = countNodes(createTree(root));
console.log(result, result === expected);

var root = [1];
var expected = 1;
var result = countNodes(createTree(root));
console.log(result, result === expected);
