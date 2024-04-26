// 1740. Find Distance in a Binary Tree
// https://leetcode.com/problems/find-distance-in-a-binary-tree/description/
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
 * @param {number} p
 * @param {number} q
 * @return {number}
 */
var findDistance = function (root, p, q) {
  const pPath = dfs(root, p, '');
  const qPath = dfs(root, q, '');

  let offset = 0;
  while (offset < pPath.length && offset < qPath.length && pPath[offset] === qPath[offset]) {
    offset++;
  }

  const pDistance = pPath.length - offset;
  const qDistance = qPath.length - offset;
  return pDistance + qDistance;

  function dfs(node, target, path) {
    if (!node) return '';
    if (node.val === target) return path;
    return dfs(node.left, target, `${path}L`) || dfs(node.right, target, `${path}R`);
  }
};

// [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4],
var root = {
    val: 3,
    left: {
      val: 5,
      left: {
        val: 6,
        left: null,
        right: null,
      },
      right: {
        val: 2,
        left: {
          val: 7,
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
    right: {
      val: 1,
      left: {
        val: 0,
        left: null,
        right: null,
      },
      right: {
        val: 8,
        left: null,
        right: null,
      },
    },
  },
  p = 5,
  q = 0;
var expected = 3;
var result = findDistance(root, p, q);
console.log(result, result === expected);

// [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4],
var root = {
    val: 3,
    left: {
      val: 5,
      left: {
        val: 6,
        left: null,
        right: null,
      },
      right: {
        val: 2,
        left: {
          val: 7,
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
    right: {
      val: 1,
      left: {
        val: 0,
        left: null,
        right: null,
      },
      right: {
        val: 8,
        left: null,
        right: null,
      },
    },
  },
  p = 5,
  q = 7;
var expected = 2;
var result = findDistance(root, p, q);
console.log(result, result === expected);

// [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4],
var root = {
    val: 3,
    left: {
      val: 5,
      left: {
        val: 6,
        left: null,
        right: null,
      },
      right: {
        val: 2,
        left: {
          val: 7,
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
    right: {
      val: 1,
      left: {
        val: 0,
        left: null,
        right: null,
      },
      right: {
        val: 8,
        left: null,
        right: null,
      },
    },
  },
  p = 5,
  q = 5;
var expected = 0;
var result = findDistance(root, p, q);
console.log(result, result === expected);
