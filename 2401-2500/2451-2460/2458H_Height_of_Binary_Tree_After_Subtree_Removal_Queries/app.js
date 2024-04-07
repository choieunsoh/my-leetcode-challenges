// 2458. Height of Binary Tree After Subtree Removal Queries
// https://leetcode.com/problems/height-of-binary-tree-after-subtree-removal-queries/description/
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
 * @param {number[]} queries
 * @return {number[]}
 */
var treeQueries = function (root, queries) {
  const result = new Array(queries.length);
  const leftHeights = new Map();
  const rightHeights = new Map();
  const removed = new Map();

  calculateHeights(root, 0);
  calculateRemovedHeights(root, 0);

  for (let i = 0; i < queries.length; i++) {
    result[i] = removed.get(queries[i]);
  }
  return result;

  function calculateHeights(root, height) {
    if (!root) return height - 1;

    const left = calculateHeights(root.left, height + 1);
    leftHeights.set(root.val, left);

    const right = calculateHeights(root.right, height + 1);
    rightHeights.set(root.val, right);

    return Math.max(left, right);
  }

  function calculateRemovedHeights(root, height) {
    if (!root) return;
    removed.set(root.val, height);

    const leftHeight = leftHeights.get(root.val);
    const rightHeight = rightHeights.get(root.val);

    calculateRemovedHeights(root.left, Math.max(height, rightHeight));
    calculateRemovedHeights(root.right, Math.max(height, leftHeight));
  }
};

// [1, 3, 4, 2, null, 6, 5, null, null, null, null, null, 7],
var root = {
    val: 1,
    left: {
      val: 3,
      left: {
        val: 2,
        left: null,
        right: null,
      },
      right: null,
    },
    right: {
      val: 4,
      left: {
        val: 6,
        left: null,
        right: null,
      },
      right: {
        val: 5,
        left: null,
        right: {
          val: 7,
          left: null,
          right: null,
        },
      },
    },
  },
  queries = [4];
var expected = [2];
var result = treeQueries(root, queries);
console.log(result, result.join() === expected.join());

// [5, 8, 9, 2, 1, 3, 7, 4, 6],
var root = {
    val: 5,
    left: {
      val: 8,
      left: {
        val: 2,
        left: {
          val: 4,
          left: null,
          right: null,
        },
        right: {
          val: 6,
          left: null,
          right: null,
        },
      },
      right: {
        val: 1,
        left: null,
        right: null,
      },
    },
    right: {
      val: 9,
      left: {
        val: 3,
        left: null,
        right: null,
      },
      right: {
        val: 7,
        left: null,
        right: null,
      },
    },
  },
  queries = [3, 2, 4, 8];
var expected = [3, 2, 3, 2];
var result = treeQueries(root, queries);
console.log(result, result.join() === expected.join());
