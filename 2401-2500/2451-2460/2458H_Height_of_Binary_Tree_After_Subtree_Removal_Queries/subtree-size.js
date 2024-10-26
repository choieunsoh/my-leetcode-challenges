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
  const nodeIndexMap = new Map();
  const subtreeSize = new Map();
  const nodeDepths = [];
  const maxDepthFromLeft = [];
  const maxDepthFromRight = [];

  // Perform DFS to populate nodeIndexMap and nodeDepths
  dfs(root, 0);

  const totalNodes = nodeDepths.length;

  // Calculate subtree sizes
  calculateSubtreeSize(root);

  // Calculate maximum depths from left and right
  maxDepthFromLeft.push(nodeDepths[0]);
  maxDepthFromRight.push(nodeDepths[totalNodes - 1]);

  for (let i = 1; i < totalNodes; i++) {
    maxDepthFromLeft.push(Math.max(maxDepthFromLeft[i - 1], nodeDepths[i]));
    maxDepthFromRight.push(Math.max(maxDepthFromRight[i - 1], nodeDepths[totalNodes - i - 1]));
  }
  maxDepthFromRight.reverse();

  // Process queries
  const results = new Array(queries.length);
  for (let i = 0; i < queries.length; i++) {
    const queryNode = queries[i];
    const startIndex = nodeIndexMap.get(queryNode) - 1;
    const endIndex = startIndex + 1 + subtreeSize.get(queryNode);

    let maxDepth = maxDepthFromLeft[startIndex];
    if (endIndex < totalNodes) {
      maxDepth = Math.max(maxDepth, maxDepthFromRight[endIndex]);
    }

    results[i] = maxDepth;
  }

  return results;

  // Depth-first search to populate nodeIndexMap and nodeDepths
  function dfs(node, depth) {
    if (!node) return;

    nodeIndexMap.set(node.val, nodeDepths.length);
    nodeDepths.push(depth);

    dfs(node.left, depth + 1);
    dfs(node.right, depth + 1);
  }

  // Calculate the size of subtree for each node
  function calculateSubtreeSize(node) {
    if (!node) return 0;

    const leftSize = calculateSubtreeSize(node.left);
    const rightSize = calculateSubtreeSize(node.right);

    const totalSize = leftSize + rightSize + 1;
    subtreeSize.set(node.val, totalSize);

    return totalSize;
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
