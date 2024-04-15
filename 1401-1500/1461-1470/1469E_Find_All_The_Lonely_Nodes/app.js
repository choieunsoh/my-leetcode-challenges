// 1469. Find All The Lonely Nodes
// https://leetcode.com/problems/find-all-the-lonely-nodes/description/
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
 * @return {number[]}
 */
var getLonelyNodes = function (root) {
  const result = [];
  dfs(root, false);
  return result;

  function dfs(node, isLonely) {
    if (!node) return;
    if (isLonely) result.push(node.val);
    dfs(node.left, node.right === null);
    dfs(node.right, node.left === null);
  }
};

// [1, 2, 3, null, 4];
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
};
var expected = [4];
var result = getLonelyNodes(root);
console.log(result, result.sort().join() === expected.sort().join());

// [7, 1, 4, 6, null, 5, 3, null, null, null, null, null, 2];
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
};
var expected = [6, 2];
var result = getLonelyNodes(root);
console.log(result, result.sort().join() === expected.sort().join());

// [11, 99, 88, 77, null, null, 66, 55, null, null, 44, 33, null, null, 22];
var root = {
  val: 11,
  left: {
    val: 99,
    left: {
      val: 77,
      left: {
        val: 55,
        left: {
          val: 33,
          left: null,
          right: null,
        },
        right: null,
      },
      right: null,
    },
    right: null,
  },
  right: {
    val: 88,
    left: null,
    right: {
      val: 66,
      left: null,
      right: {
        val: 44,
        left: null,
        right: {
          val: 22,
          left: null,
          right: null,
        },
      },
    },
  },
};
var expected = [77, 55, 33, 66, 44, 22];
var result = getLonelyNodes(root);
console.log(result, result.sort().join() === expected.sort().join());
