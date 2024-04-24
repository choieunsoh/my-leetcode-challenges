// 563. Binary Tree Tilt
// https://leetcode.com/problems/binary-tree-tilt/description/
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
 * @return {number}
 */
var findTilt = function (root) {
  let result = 0;
  dfs(root);
  return result;

  function dfs(node) {
    if (!node) return 0;

    const leftSum = dfs(node.left);
    const rightSum = dfs(node.right);
    result += Math.abs(leftSum - rightSum);
    return node.val + leftSum + rightSum;
  }
};

// [1, 2, 3];
var root = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null,
  },
  right: {
    val: 3,
    left: null,
    right: null,
  },
};
var expected = 1;
var result = findTilt(root);
console.log(result, result === expected);

// [4, 2, 9, 3, 5, null, 7];
var root = {
  val: 4,
  left: {
    val: 2,
    left: {
      val: 3,
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
    val: 9,
    left: null,
    right: {
      val: 7,
      left: null,
      right: null,
    },
  },
};
var expected = 15;
var result = findTilt(root);
console.log(result, result === expected);

// [21, 7, 14, 1, 1, 2, 2, 3, 3];
var root = {
  val: 21,
  left: {
    val: 7,
    left: {
      val: 1,
      left: {
        val: 3,
        left: null,
        right: null,
      },
      right: {
        val: 3,
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
    val: 14,
    left: {
      val: 2,
      left: null,
      right: null,
    },
    right: {
      val: 2,
      left: null,
      right: null,
    },
  },
};
var expected = 9;
var result = findTilt(root);
console.log(result, result === expected);
