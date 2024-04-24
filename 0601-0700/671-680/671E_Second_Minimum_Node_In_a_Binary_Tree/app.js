// 671. Second Minimum Node In a Binary Tree
// https://leetcode.com/problems/second-minimum-node-in-a-binary-tree/description/
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
var findSecondMinimumValue = function (root) {
  let smallest = Number.MAX_SAFE_INTEGER;
  let secondSmallest = Number.MAX_SAFE_INTEGER;
  dfs(root);
  return secondSmallest === Number.MAX_SAFE_INTEGER ? -1 : secondSmallest;

  function dfs(node) {
    if (!node) return;
    if (node.val < smallest) {
      secondSmallest = smallest;
      smallest = node.val;
    } else if (node.val > smallest && node.val < secondSmallest) {
      secondSmallest = node.val;
    }
    dfs(node.left);
    dfs(node.right);
  }
};

// [2, 2, 5, null, null, 5, 7];
var root = {
  val: 2,
  left: {
    val: 2,
    left: null,
    right: null,
  },
  right: {
    val: 5,
    left: {
      val: 5,
      left: null,
      right: null,
    },
    right: {
      val: 7,
      left: null,
      right: null,
    },
  },
};
var expected = 5;
var result = findSecondMinimumValue(root);
console.log(result, result === expected);

// [2, 2, 2];
var root = {
  val: 2,
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
};
var expected = -1;
var result = findSecondMinimumValue(root);
console.log(result, result === expected);
