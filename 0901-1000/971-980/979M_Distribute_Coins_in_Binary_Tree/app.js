// 979. Distribute Coins in Binary Tree
// https://leetcode.com/problems/distribute-coins-in-binary-tree/description/
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
var distributeCoins = function (root) {
  let result = 0;
  dfs(root);
  return result;

  function dfs(node) {
    if (!node) return 0;

    const left = dfs(node.left);
    const right = dfs(node.right);
    result += Math.abs(left) + Math.abs(right);
    return left + right + node.val - 1;
  }
};

// [3, 0, 0];
var root = {
  val: 3,
  left: {
    val: 0,
    left: null,
    right: null,
  },
  right: {
    val: 0,
    left: null,
    right: null,
  },
};
var expected = 2;
var result = distributeCoins(root);
console.log(result, result === expected);

// [0, 3, 0];
var root = {
  val: 0,
  left: {
    val: 3,
    left: null,
    right: null,
  },
  right: {
    val: 0,
    left: null,
    right: null,
  },
};
var expected = 3;
var result = distributeCoins(root);
console.log(result, result === expected);

// [4,0,null,null,0,null,0]
var root = {
  val: 4,
  left: {
    val: 0,
    left: null,
    right: {
      val: 0,
      left: null,
      right: {
        val: 0,
        left: null,
        right: null,
      },
    },
  },
  right: null,
};
var expected = 6;
var result = distributeCoins(root);
console.log(result, result === expected);
