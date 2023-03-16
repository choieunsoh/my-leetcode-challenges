// 106. Construct Binary Tree from Inorder and Postorder Traversal
// https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  const midMap = new Map();
  for (let i = 0; i < inorder.length; i++) {
    midMap.set(inorder[i], i);
  }

  let index = postorder.length - 1;
  return createTree(0, index);

  function createTree(left, right) {
    if (left > right) return null;

    const val = postorder[index--];
    const mid = midMap.get(val);

    const root = new TreeNode(val);
    root.right = createTree(mid + 1, right);
    root.left = createTree(left, mid - 1);
    return root;
  }
};

var inorder = [9, 3, 15, 20, 7],
  postorder = [9, 15, 7, 20, 3];
var expected = inOrder(createTree([3, 9, 20, null, null, 15, 7]));
var result = inOrder(buildTree(inorder, postorder));
console.log(result, result.join() === expected.join());

var inorder = [-1],
  postorder = [-1];
var expected = inOrder(createTree([-1]));
var result = inOrder(buildTree(inorder, postorder));
console.log(result, result.join() === expected.join());
