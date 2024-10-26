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
  const eulerTour = [];
  const nodeHeights = new Map();
  const firstOccurrence = new Map();
  const lastOccurrence = new Map();

  // Perform DFS to build Euler tour and node information
  dfs(root, 0);

  const tourSize = eulerTour.length;
  const maxDepthLeft = new Array(tourSize);
  const maxDepthRight = new Array(tourSize);

  // Initialize the first and last elements of maxDepth arrays
  maxDepthLeft[0] = maxDepthRight[tourSize - 1] = nodeHeights.get(root.val);

  // Build maxDepthLeft array
  for (let i = 1; i < tourSize; i++) {
    maxDepthLeft[i] = Math.max(maxDepthLeft[i - 1], nodeHeights.get(eulerTour[i]));
  }

  // Build maxDepthRight array
  for (let i = tourSize - 2; i >= 0; i--) {
    maxDepthRight[i] = Math.max(maxDepthRight[i + 1], nodeHeights.get(eulerTour[i]));
  }

  // Process queries
  const results = new Array(queries.length);
  for (let i = 0; i < queries.length; i++) {
    const queryNode = queries[i];
    const leftMax = firstOccurrence.get(queryNode) > 0 ? maxDepthLeft[firstOccurrence.get(queryNode) - 1] : 0;
    const rightMax =
      lastOccurrence.get(queryNode) < tourSize - 1 ? maxDepthRight[lastOccurrence.get(queryNode) + 1] : 0;
    results[i] = Math.max(leftMax, rightMax);
  }

  return results;

  // Depth-first search to build the Euler tour and store node information
  function dfs(node, height) {
    if (!node) return;

    nodeHeights.set(node.val, height);
    firstOccurrence.set(node.val, eulerTour.length);
    eulerTour.push(node.val);

    dfs(node.left, height + 1);
    dfs(node.right, height + 1);

    lastOccurrence.set(node.val, eulerTour.length);
    eulerTour.push(node.val);
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
