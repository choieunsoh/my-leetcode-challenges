// https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/
// 106. Construct Binary Tree from Inorder and Postorder Traversal
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  let index = postorder.length - 1;
  const map = new Map();
  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }

  function createTree(left = 0, right = inorder.length - 1) {
    if (left > right || index < 0) return null;

    const val = postorder[index--];
    const root = new TreeNode(val);
    const mid = map.get(val);

    root.right = createTree(mid + 1, right);
    root.left = createTree(left, mid - 1);

    return root;
  }

  return createTree();
};

var inorder = [9, 3, 15, 20, 7],
  postorder = [9, 15, 7, 20, 3];
var expected = createTree([3, 9, 20, null, null, 15, 7]);
var result = buildTree(inorder, postorder);
printTree(result);
printTree(expected);

var inorder = [-1],
  postorder = [-1];
var expected = createTree([-1]);
var result = buildTree(inorder, postorder);
printTree(result);
printTree(expected);
