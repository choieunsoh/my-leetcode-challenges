// 958. Check Completeness of a Binary Tree
// https://leetcode.com/problems/check-completeness-of-a-binary-tree/
const { TreeNode, createTree, inOrder } = require('../../../_utils/tree');
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
 * @return {boolean}
 */
var isCompleteTree = function (root) {
  let queue = [root];
  let nullNodeFound = false;
  while (queue.length) {
    const newQueue = [];
    for (let i = 0; i < queue.length; i++) {
      const node = queue[i];
      if (!node) {
        nullNodeFound = true;
      } else {
        if (nullNodeFound) return false;
        newQueue.push(node.left);
        newQueue.push(node.right);
      }
    }
    queue = newQueue;
  }
  return true;
};

var root = [1, 2, 3, 4, 5, 6];
var expected = true;
var result = isCompleteTree(createTree(root));
console.log(result, result === expected);

var root = [1, 2, 3, 4, 5, null, 7];
var expected = false;
var result = isCompleteTree(createTree(root));
console.log(result, result === expected);

var root = [1, 2, 3, 4, 5, 6, 7, 8, null, null, 9];
var expected = false;
var result = isCompleteTree(createTree(root));
console.log(result, result === expected);

var root = [1, 2, 3, 4];
var expected = true;
var result = isCompleteTree(createTree(root));
console.log(result, result === expected);

var root = [1, 2, 3, null, null, 7, 8];
var expected = false;
var result = isCompleteTree(createTree(root));
console.log(result, result === expected);

var root = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
  33,
];
var expected = true;
var result = isCompleteTree(createTree(root));
console.log(result, result === expected);
