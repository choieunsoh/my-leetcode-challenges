// 1530. Number of Good Leaf Nodes Pairs
// https://leetcode.com/problems/number-of-good-leaf-nodes-pairs/description/
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
 * @param {number} distance
 * @return {number}
 */
var countPairs = function (root, distance) {
  let count = 0;
  const parents = new Map();
  const leaves = [];
  buildParents(root);
  for (const leaf of leaves) {
    dfs(leaf, 0, new Set());
  }
  return count / 2;

  function buildParents(node) {
    if (!node) return;
    if (isLeafNode(node)) leaves.push(node);
    if (node.left) parents.set(node.left, node);
    if (node.right) parents.set(node.right, node);
    buildParents(node.left);
    buildParents(node.right);
  }

  function dfs(node, dist, seen) {
    if (!node) return;
    if (dist > distance) return;
    if (seen.has(node)) return;

    if (dist > 0 && isLeafNode(node)) {
      count++;
    }
    seen.add(node);

    dfs(node.left, dist + 1, seen);
    dfs(node.right, dist + 1, seen);
    dfs(parents.get(node), dist + 1, seen);
  }

  function isLeafNode(node) {
    return node.left === null && node.right === null;
  }
};

// [1,2,3,null,4]
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
  distance = 3;
var expected = 1;
var result = countPairs(root, distance);
console.log(result, result === expected);

// [1, 2, 3, 4, 5, 6, 7]
var root = {
    val: 1,
    left: {
      val: 2,
      left: {
        val: 4,
        left: null,
        right: null,
      },
      right: {
        val: 5,
        left: null,
        right: null,
      },
    },
    right: {
      val: 3,
      left: {
        val: 6,
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
  distance = 3;
var expected = 2;
var result = countPairs(root, distance);
console.log(result, result === expected);

// [7, 1, 4, 6, null, 5, 3, null, null, null, null, null, 2]
var root = {
    val: 7,
    left: {
      val: 1,
      left: {
        val: 6,
        left: null,
        right: null,
      },
      right: null,
    },
    right: {
      val: 4,
      left: {
        val: 5,
        left: null,
        right: null,
      },
      right: {
        val: 3,
        left: null,
        right: {
          val: 2,
          left: null,
          right: null,
        },
      },
    },
  },
  distance = 3;
var expected = 1;
var result = countPairs(root, distance);
console.log(result, result === expected);

// [1,1,1]
var root = {
    val: 1,
    left: {
      val: 1,
      left: null,
      right: null,
    },
    right: {
      val: 1,
      left: null,
      right: null,
    },
  },
  distance = 2;
var expected = 1;
var result = countPairs(root, distance);
console.log(result, result === expected);
