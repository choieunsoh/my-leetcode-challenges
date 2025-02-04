// 1448. Count Good Nodes in Binary Tree
// https://leetcode.com/problems/count-good-nodes-in-binary-tree/
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
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function (root) {
  let numGoodNodes = 0;
  const stack = [[root, -Infinity]];
  while (stack.length > 0) {
    const [node, maxSoFar] = stack.pop();
    if (maxSoFar <= node.val) {
      numGoodNodes++;
    }

    if (node.left !== null) {
      stack.push([node.left, Math.max(node.val, maxSoFar)]);
    }

    if (node.right !== null) {
      stack.push([node.right, Math.max(node.val, maxSoFar)]);
    }
  }

  return numGoodNodes;
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
