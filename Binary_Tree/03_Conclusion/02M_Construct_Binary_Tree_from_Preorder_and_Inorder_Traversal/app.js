// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
// 105. Construct Binary Tree from Preorder and Inorder Traversal
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  const map = new Map();
  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }

  function createTree(left = 0, right = inorder.length - 1) {
    if (left > right) return null;

    const val = preorder.shift();
    const root = new TreeNode(val);
    const mid = map.get(val);

    root.left = createTree(left, mid - 1);
    root.right = createTree(mid + 1, right);

    return root;
  }

  return createTree();
};

var preorder = [3, 9, 20, 15, 7],
  inorder = [9, 3, 15, 20, 7];
var expected = createTree([3, 9, 20, null, null, 15, 7]);
var result = buildTree(preorder, inorder);
printTree(result);
printTree(expected);

var preorder = [-1],
  inorder = [-1];
var expected = createTree([-1]);
var result = buildTree(preorder, inorder);
printTree(result);
printTree(expected);
