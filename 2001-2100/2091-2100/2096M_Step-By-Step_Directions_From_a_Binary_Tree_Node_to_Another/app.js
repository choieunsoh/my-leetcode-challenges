// 2096. Step-By-Step Directions From a Binary Tree Node to Another
// https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/description/
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
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */
var getDirections = function (root, startValue, destValue) {
  const startPath = dfs(root, startValue, '');
  const destPath = dfs(root, destValue, '');

  let i = 0;
  while (i < startPath.length && i < destPath.length && startPath[i] === destPath[i]) {
    i++;
  }

  let result = '';
  for (let j = i; j < startPath.length; j++) {
    result += 'U';
  }
  return result + destPath.substring(i);

  function dfs(node, target, path) {
    if (!node) return '';
    if (node.val === target) return path;
    return dfs(node.left, target, `${path}L`) || dfs(node.right, target, `${path}R`);
  }
};

// [5, 1, 2, 3, null, 6, 4],
var root = {
    val: 5,
    left: {
      val: 1,
      left: {
        val: 3,
        left: null,
        right: null,
      },
      right: null,
    },
    right: {
      val: 2,
      left: {
        val: 6,
        left: null,
        right: null,
      },
      right: {
        val: 4,
        left: null,
        right: null,
      },
    },
  },
  startValue = 3,
  destValue = 6;
var expected = 'UURL';
var result = getDirections(root, startValue, destValue);
console.log(result, result === expected);

// [2, 1],
var root = {
    val: 2,
    left: {
      val: 1,
      left: null,
      right: null,
    },
    right: null,
  },
  startValue = 2,
  destValue = 1;
var expected = 'L';
var result = getDirections(root, startValue, destValue);
console.log(result, result === expected);

// [5, 1, 2, 3, null, 6, 4],
var root = {
    val: 5,
    left: {
      val: 1,
      left: {
        val: 3,
        left: null,
        right: null,
      },
      right: null,
    },
    right: {
      val: 2,
      left: {
        val: 6,
        left: null,
        right: null,
      },
      right: {
        val: 4,
        left: null,
        right: null,
      },
    },
  },
  startValue = 6,
  destValue = 3;
var expected = 'UULL';
var result = getDirections(root, startValue, destValue);
console.log(result, result === expected);
