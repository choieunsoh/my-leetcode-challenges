// 199. Binary Tree Right Side View
// https://leetcode.com/problems/binary-tree-right-side-view/
const { TreeNode, createTree, printTree } = require('../../../_utils/tree');
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
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (!root) return [];
  const result = [];
  let queue = [[root]];
  while (queue.length) {
    const newQueue = [];
    const nodes = queue[queue.length - 1];
    if (nodes.length > 0) {
      result.push(nodes[nodes.length - 1].val);
      for (const { left, right } of nodes) {
        if (left) newQueue.push(left);
        if (right) newQueue.push(right);
      }
    }
    queue = newQueue.length ? [newQueue] : [];
  }
  return result;
};

var root = createTree([1, 2, 3, null, 5, null, 4]);
var expected = [1, 3, 4];
var result = rightSideView(root);
console.log(result, expected.join() === result.join());

var root = createTree([1, null, 3]);
var expected = [1, 3];
var result = rightSideView(root);
console.log(result, expected.join() === result.join());

var root = createTree([1, 2, 3, 4]);
var expected = [1, 3, 4];
var result = rightSideView(root);
console.log(result, expected.join() === result.join());
