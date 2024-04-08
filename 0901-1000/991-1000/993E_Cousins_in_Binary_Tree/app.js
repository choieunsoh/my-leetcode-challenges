// 993. Cousins in Binary Tree
// https://leetcode.com/problems/cousins-in-binary-tree/description/
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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
  const [xDepth, xParent] = dfs(root, 0, null, x);
  const [yDepth, yParent] = dfs(root, 0, null, y);
  return xDepth === yDepth && xParent !== yParent;

  function dfs(node, depth, parent, target) {
    if (node) {
      if (node.val === target) return [depth, parent];
      const [leftDepth, leftParent] = dfs(node.left, depth + 1, node, target);
      const [rightDepth, rightParent] = dfs(node.right, depth + 1, node, target);
      if (leftDepth) return [leftDepth, leftParent];
      if (rightDepth) return [rightDepth, rightParent];
    }
    return [null, null];
  }
};

// [1, 2, 3, 4];
var root = {
    val: 1,
    left: {
      val: 2,
      left: {
        val: 4,
        left: null,
        right: null,
      },
      right: null,
    },
    right: {
      val: 3,
      left: null,
      right: null,
    },
  },
  x = 4,
  y = 3;
var expected = false;
var result = isCousins(root, x, y);
console.log(result, result === expected);

// [1, 2, 3, null, 4, null, 5]
var root = {
    val: 1,
    left: {
      val: 2,
      left: null,
      right: {
        val: 4,
        left: null,
        right: null,
      },
    },
    right: {
      val: 3,
      left: null,
      right: {
        val: 5,
        left: null,
        right: null,
      },
    },
  },
  x = 5,
  y = 4;
var expected = true;
var result = isCousins(root, x, y);
console.log(result, result === expected);

// [1, 2, 3, null, 4]
var root = {
    val: 1,
    left: {
      val: 2,
      left: null,
      right: {
        val: 4,
        left: null,
        right: null,
      },
    },
    right: {
      val: 3,
      left: null,
      right: null,
    },
  },
  x = 2,
  y = 3;
var expected = false;
var result = isCousins(root, x, y);
console.log(result, result === expected);
