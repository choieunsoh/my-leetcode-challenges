// 1022. Sum of Root To Leaf Binary Numbers
// https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/description/
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
var sumRootToLeaf = function (root) {
  let result = 0;
  dfs(root, 0);
  return result;

  function dfs(node, num) {
    if (!node) return;

    num = (num << 1) | node.val;
    if (node.left === null && node.right === null) {
      result += num;
    }

    dfs(node.left, num);
    dfs(node.right, num);
  }
};

// [1, 0, 1, 0, 1, 0, 1];
var root = {
  val: 1,
  left: {
    val: 0,
    left: {
      val: 0,
      left: null,
      right: null,
    },
    right: {
      val: 1,
      left: null,
      right: null,
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
      val: 1,
      left: null,
      right: null,
    },
  },
};
var expected = 22;
var result = sumRootToLeaf(root);
console.log(result, result === expected);

// [0];
var root = {
  val: 0,
  left: null,
  right: null,
};
var expected = 0;
var result = sumRootToLeaf(root);
console.log(result, result === expected);
