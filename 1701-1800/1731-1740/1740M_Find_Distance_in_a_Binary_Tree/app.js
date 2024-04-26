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
  const MAX = Number.MAX_SAFE_INTEGER;
  let result = MAX;
  dfs(root);
  return result;

  function dfs(node) {
    if (!node) return [MAX, MAX];
    const [leftP, leftQ] = dfs(node.left);
    const [rightP, rightQ] = dfs(node.right);
    const distanceP = node.val === p ? 0 : 1 + Math.min(leftP, rightP);
    const distanceQ = node.val === q ? 0 : 1 + Math.min(leftQ, rightQ);
    result = Math.min(result, distanceP + distanceQ);
    return [distanceP, distanceQ];
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
