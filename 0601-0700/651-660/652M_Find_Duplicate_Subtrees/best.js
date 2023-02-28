// 652. Find Duplicate Subtrees
// https://leetcode.com/problems/find-duplicate-subtrees/
const { TreeNode, createTree, inOrder, preOrder } = require('../../../_utils/tree');
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
  const counting = new Map();
  const result = [];

  function dfs(root) {
    if (!root) return 0;

    const left = dfs(root.left);
    const right = dfs(root.right);
    const subtree = `${left},${root.val},${right}`;
    if (!map.has(subtree)) {
      map.set(subtree, map.size + 1);
    }

    const id = map.get(subtree);
    const count = counting.get(id) ?? 0;
    if (count === 1) {
      result.push(root);
    }
    counting.set(id, count + 1);

    return id;
  }

  dfs(root);
  return result;
};

var root = createTree([1, 2, 3, 4, null, 2, 4, null, null, 4]);
var expected = [[2, 4], [4]];
var result = findDuplicateSubtrees(root);
console.log(result.map((node) => preOrder(node)).sort());
console.log(expected.sort());

var root = createTree([2, 1, 1]);
var expected = [[1]];
var result = findDuplicateSubtrees(root);
console.log(result.map((node) => preOrder(node)).sort());
console.log(expected.sort());

var root = createTree([2, 2, 2, 3, null, 3, null]);
var expected = [[2, 3], [3]];
var result = findDuplicateSubtrees(root);
console.log(result.map((node) => preOrder(node)).sort());
console.log(expected.sort());
