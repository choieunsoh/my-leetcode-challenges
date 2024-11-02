// 1214. Two Sum BSTs
// https://leetcode.com/problems/two-sum-bsts/description/
// T.C.: O(m+n)
// S.C.: O(m+n)
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @param {number} target
 * @return {boolean}
 */
var twoSumBSTs = function (root1, root2, target) {
  const nums = new Set();
  buildNumSet(root2);
  return findPair(root1);

  function buildNumSet(node) {
    if (!node) return;
    nums.add(node.val);
    buildNumSet(node.left);
    buildNumSet(node.right);
  }

  function findPair(node) {
    if (!node) return false;
    if (nums.has(target - node.val)) return true;
    return findPair(node.left) || findPair(node.right);
  }
};

// root1 = [2, 1, 4],
// root2 = [1, 0, 3],
var root1 = {
    val: 2,
    left: {
      val: 1,
      left: null,
      right: null,
    },
    right: {
      val: 4,
      left: null,
      right: null,
    },
  },
  root2 = {
    val: 1,
    left: {
      val: 0,
      left: null,
      right: null,
    },
    right: {
      val: 3,
      left: null,
      right: null,
    },
  },
  target = 5;
var expected = true;
var result = twoSumBSTs(root1, root2, target);
console.log(result, result === expected);

// root1 = [0, -10, 10],
// root2 = [5, 1, 7, 0, 2],
var root1 = {
    val: 0,
    left: {
      val: -10,
      left: null,
      right: null,
    },
    right: {
      val: 10,
      left: null,
      right: null,
    },
  },
  root2 = {
    val: 5,
    left: {
      val: 1,
      left: {
        val: 0,
        left: null,
        right: null,
      },
      right: {
        val: 2,
        left: null,
        right: null,
      },
    },
    right: {
      val: 7,
      left: null,
      right: null,
    },
  },
  target = 18;
var expected = false;
var result = twoSumBSTs(root1, root2, target);
console.log(result, result === expected);
