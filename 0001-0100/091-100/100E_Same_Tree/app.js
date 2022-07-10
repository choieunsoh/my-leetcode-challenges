// https://leetcode.com/problems/same-tree/
// 100. Same Tree
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;

  const pStack = [p];
  const qStack = [q];

  while (pStack.length && qStack.length) {
    const pNode = pStack.shift();
    const qNode = qStack.shift();
    if (pNode.val !== qNode.val) return false;
    if (pNode.left?.val !== qNode.left?.val) return false;
    if (pNode.right?.val !== qNode.right?.val) return false;

    if (pNode.left && qNode.left) {
      pStack.push(pNode.left);
      qStack.push(qNode.left);
    }

    if (pNode.right && qNode.right) {
      pStack.push(pNode.right);
      qStack.push(qNode.right);
    }
  }
  return true;
};

var p = [1, 2],
  q = [1, null, 2],
  expect = false;
var result = isSameTree(createTree(p), createTree(q));
console.log(result, expect);

var p = [1, 2, 3],
  q = [1, 2, 3],
  expect = true;
var result = isSameTree(createTree(p), createTree(q));
console.log(result, expect);

var p = [1, 2, 1],
  q = [1, 1, 2],
  expect = false;
var result = isSameTree(createTree(p), createTree(q));
console.log(result, expect);
