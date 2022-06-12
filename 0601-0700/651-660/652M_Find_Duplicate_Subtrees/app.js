// https://leetcode.com/problems/find-duplicate-subtrees/
// 652. Find Duplicate Subtrees
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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root) {
  const map = new Map();
  const result = [];

  function dfs(root) {
    if (!root) return '#';
    const subtree = `${root.val}.${dfs(root.left)}.${dfs(root.right)}`;
    map.set(subtree, (map.get(subtree) || 0) + 1);
    if (map.get(subtree) === 2) {
      result.push(root);
    }
    console.log(subtree, map.get(subtree));
    return subtree;
  }

  dfs(root);

  console.log(result.length);
  return result;
};

var root = createTree([1, 2, 3, 4, null, 2, 4, null, null, 4]);
var expected = [[2, 4], [4]];
console.log(findDuplicateSubtrees(root));

var root = createTree([2, 1, 1]);
var expected = [[1]];
console.log(findDuplicateSubtrees(root));

var root = createTree([2, 2, 2, 3, null, 3, null]);
var expected = [[2, 3], [3]];
console.log(findDuplicateSubtrees(root));
