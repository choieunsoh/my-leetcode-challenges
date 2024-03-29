// 617. Merge Two Binary Trees
// https://leetcode.com/problems/merge-two-binary-trees/
const { TreeNode, createTree, levelOrder } = require('../../../_utils/tree');
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
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  if (!root1 && !root2) return null;
  if (!root1) return root2;
  if (!root2) return root1;

  root1.val += root2.val;
  root1.left = mergeTrees(root1.left, root2.left);
  root1.right = mergeTrees(root1.right, root2.right);
  return root1;
};

var root1 = [1, 3, 2, 5],
  root2 = [2, 1, 3, null, 4, null, 7];
var expected = [3, 4, 5, 5, 4, null, 7];
var result = mergeTrees(createTree(root1), createTree(root2));
var resultTree = levelOrder(result);
var expectedTree = levelOrder(createTree(expected));
console.log(resultTree, resultTree.join() === expectedTree.join());

var root1 = [1],
  root2 = [1, 2];
var expected = [2, 2];
var result = mergeTrees(createTree(root1), createTree(root2));
var resultTree = levelOrder(result);
var expectedTree = levelOrder(createTree(expected));
console.log(resultTree, resultTree.join() === expectedTree.join());
