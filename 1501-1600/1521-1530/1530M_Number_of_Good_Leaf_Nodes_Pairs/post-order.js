// 1530. Number of Good Leaf Nodes Pairs
// https://leetcode.com/problems/number-of-good-leaf-nodes-pairs/description/
// T.C.: O(n * d^2)
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
  const count = postOrder(root);
  return count.at(-1);

  function postOrder(node) {
    if (!node) return new Array(12).fill(0);

    if (isLeafNode(node)) {
      const current = new Array(12).fill(0);
      current[0] = 1;
      return current;
    }

    const left = postOrder(node.left);
    const right = postOrder(node.right);

    const current = new Array(12).fill(0);
    for (let i = 0; i < 10; i++) {
      current[i + 1] += left[i] + right[i];
    }
    current[11] += left[11] + right[11];

    for (let d1 = 0; d1 <= distance; d1++) {
      for (let d2 = 0; d2 <= distance; d2++) {
        const totalDistance = d1 + d2 + 2;
        if (totalDistance <= distance) {
          current[11] += left[d1] * right[d2];
        }
      }
    }
    return current;
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
