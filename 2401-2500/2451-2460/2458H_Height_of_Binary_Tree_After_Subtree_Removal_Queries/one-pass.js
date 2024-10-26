// 2458. Height of Binary Tree After Subtree Removal Queries
// https://leetcode.com/problems/height-of-binary-tree-after-subtree-removal-queries/description/
// T.C.: O(n+q)
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
  const resultMap = new Map();
  const heightCache = new Map();
  dfs(root, 0, 0);

  const result = new Array(queries.length);
  for (let i = 0; i < queries.length; i++) {
    result[i] = resultMap.get(queries[i]);
  }
  return result;

  function height(node) {
    if (!node) return -1;
    if (heightCache.has(node)) return heightCache.get(node);

    const leftHeight = height(node.left);
    const rightHeight = height(node.right);
    const maxHeight = Math.max(leftHeight, rightHeight) + 1;
    heightCache.set(node, maxHeight);
    return maxHeight;
  }

  function dfs(node, depth, maxVal) {
    if (!node) return;

    resultMap.set(node.val, maxVal);

    dfs(node.left, depth + 1, Math.max(maxVal, depth + 1 + height(node.right)));
    dfs(node.right, depth + 1, Math.max(maxVal, depth + 1 + height(node.left)));
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
