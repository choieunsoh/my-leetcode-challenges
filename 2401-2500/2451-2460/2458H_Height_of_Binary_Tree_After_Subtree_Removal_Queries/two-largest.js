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
  const nodeDepths = new Map();
  const subtreeHeights = new Map();
  const firstLargestHeight = new Map();
  const secondLargestHeight = new Map();

  // Perform DFS to calculate depths and heights
  dfs(root, 0);

  const results = new Array(queries.length);

  // Process each query
  for (let i = 0; i < queries.length; i++) {
    const queryNode = queries[i];
    const nodeLevel = nodeDepths.get(queryNode);

    // Calculate the height of the tree after removing the query node
    if (subtreeHeights.get(queryNode) === firstLargestHeight.get(nodeLevel)) {
      results[i] = nodeLevel + (secondLargestHeight.get(nodeLevel) || 0) - 1;
    } else {
      results[i] = nodeLevel + (firstLargestHeight.get(nodeLevel) || 0) - 1;
    }
  }

  return results;

  // Depth-first search to calculate node depths and subtree heights
  function dfs(node, level) {
    if (!node) return 0;

    nodeDepths.set(node.val, level);

    // Calculate the height of the current subtree
    const leftHeight = dfs(node.left, level + 1);
    const rightHeight = dfs(node.right, level + 1);
    const currentHeight = 1 + Math.max(leftHeight, rightHeight);

    subtreeHeights.set(node.val, currentHeight);

    // Update the largest and second largest heights at the current level
    const currentFirstLargest = firstLargestHeight.get(level) || 0;
    if (currentHeight > currentFirstLargest) {
      secondLargestHeight.set(level, currentFirstLargest);
      firstLargestHeight.set(level, currentHeight);
    } else if (currentHeight > (secondLargestHeight.get(level) || 0)) {
      secondLargestHeight.set(level, currentHeight);
    }

    return currentHeight;
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
