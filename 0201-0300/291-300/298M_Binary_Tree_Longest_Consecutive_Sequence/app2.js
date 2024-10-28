// 298. Binary Tree Longest Consecutive Sequence
// https://leetcode.com/problems/binary-tree-longest-consecutive-sequence/description/
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
var longestConsecutive = function (root, parent = null, length = 0) {
  let maxLength = 0;
  dfs(root);
  return maxLength;

  function dfs(node) {
    if (!node) return 0;
    let leftLength = dfs(node.left) + 1;
    if (node.left && node.left.val != node.val + 1) {
      leftLength = 1;
    }
    let rightLength = dfs(node.right) + 1;
    if (node.right && node.right.val != node.val + 1) {
      rightLength = 1;
    }

    const length = Math.max(leftLength, rightLength);
    maxLength = Math.max(maxLength, length);
    return length;
  }
};

// [1,null,3,2,4,null,null,null,5]
var root = {
  val: 1,
  left: null,
  right: {
    val: 3,
    left: {
      val: 2,
      left: null,
      right: null,
    },
    right: {
      val: 4,
      left: null,
      right: {
        val: 5,
        left: null,
        right: null,
      },
    },
  },
};
var expected = 3;
var result = longestConsecutive(root);
console.log(result, result === expected);

// [2,null,3,2,null,1]
var root = {
  val: 2,
  left: null,
  right: {
    val: 3,
    left: {
      val: 2,
      left: {
        val: 1,
        left: null,
        right: null,
      },
      right: null,
    },
    right: null,
  },
};
var expected = 2;
var result = longestConsecutive(root);
console.log(result, result === expected);
