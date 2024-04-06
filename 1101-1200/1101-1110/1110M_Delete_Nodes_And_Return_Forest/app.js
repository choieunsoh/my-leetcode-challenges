// 1110. Delete Nodes And Return Forest
// https://leetcode.com/problems/delete-nodes-and-return-forest/description/
// T.C.: O(n)
// S.C.: O(n)
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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function (root, to_delete) {
  const result = [];
  const deleteSet = new Set(to_delete);
  if (!deleteSet.has(root.val)) result.push(root);
  dfs(root);
  return result;

  function dfs(root) {
    if (!root) return root;
    root.left = dfs(root.left);
    root.right = dfs(root.right);

    if (deleteSet.has(root.val)) {
      if (root.left) result.push(root.left);
      if (root.right) result.push(root.right);
      return null;
    }
    return root;
  }
};

// [1, 2, 3, 4, 5, 6, 7],
var root = {
    val: 1,
    left: {
      val: 2,
      left: { val: 4, left: null, right: null },
      right: { val: 5, left: null, right: null },
    },
    right: {
      val: 3,
      left: { val: 6, left: null, right: null },
      right: { val: 7, left: null, right: null },
    },
  },
  to_delete = [3, 5];
// [[1, 2, null, 4], [6], [7]];
var expected = [
  {
    val: 1,
    left: {
      val: 2,
      left: { val: 4, left: null, right: null },
      right: null,
    },
    right: null,
  },
  {
    val: 6,
    left: null,
    right: null,
  },
  {
    val: 7,
    left: null,
    right: null,
  },
];
var result = delNodes(root, to_delete);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

// [1, 2, 4, null, 3],
var root = {
    val: 1,
    left: {
      val: 2,
      left: null,
      right: { val: 3, left: null, right: null },
    },
    right: {
      val: 4,
      left: null,
      right: null,
    },
  },
  to_delete = [3];
// [[1, 2, 4]];
var expected = [
  {
    val: 1,
    left: {
      val: 2,
      left: null,
      right: null,
    },
    right: {
      val: 4,
      left: null,
      right: null,
    },
  },
];
var result = delNodes(root, to_delete);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

// [1, 2, null, 4, 3],
var root = {
    val: 1,
    left: {
      val: 2,
      left: { val: 4, left: null, right: null },
      right: { val: 3, left: null, right: null },
    },
    right: null,
  },
  to_delete = [2, 3];
// [[1], [4]];
var expected = [
  {
    val: 1,
    left: null,
    right: null,
  },
  {
    val: 4,
    left: null,
    right: null,
  },
];
var result = delNodes(root, to_delete);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

// [1,2,3,null,null,null,4]
var root = {
    val: 1,
    left: {
      val: 2,
      left: null,
      right: null,
    },
    right: {
      val: 3,
      left: null,
      right: { val: 4, left: null, right: null },
    },
  },
  to_delete = [2, 1];
// [[3, null, 4]];
var expected = [
  {
    val: 3,
    left: null,
    right: {
      val: 4,
      left: null,
      right: null,
    },
  },
];
var result = delNodes(root, to_delete);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));
