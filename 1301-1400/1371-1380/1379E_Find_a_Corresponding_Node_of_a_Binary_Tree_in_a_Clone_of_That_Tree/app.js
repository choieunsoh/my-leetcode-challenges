// 1379. Find a Corresponding Node of a Binary Tree in a Clone of That Tree
// https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function (original, cloned, target) {
  return dfs(cloned);

  function dfs(node) {
    if (!node) return;
    if (node === target) return node;
    return dfs(node.left) || dfs(node.right);
  }
};

var tree = [7, 4, 3, null, null, 6, 19],
  target = 3;
var expected = 3;

var tree = [7],
  target = 7;
var expected = 7;

var tree = [8, null, 6, null, 5, null, 4, null, 3, null, 2, null, 1],
  target = 4;
var expected = 4;
