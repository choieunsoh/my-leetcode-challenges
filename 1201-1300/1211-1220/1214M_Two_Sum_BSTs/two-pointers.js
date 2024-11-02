// 1214. Two Sum BSTs
// https://leetcode.com/problems/two-sum-bsts/description/
// T.C.: O(m log n)
// S.C.: O(log m + log n)
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
  const nums1 = [];
  const nums2 = [];
  buildNums(root1, nums1);
  buildNums(root2, nums2);

  let left = 0;
  let right = nums2.length - 1;
  while (left < nums1.length && right >= 0) {
    const sum = nums1[left] + nums2[right];
    if (sum === target) return true;
    if (sum < target) left++;
    else right--;
  }
  return false;

  function buildNums(node, nums) {
    if (!node) return;
    nums.push(node.val);
    buildNums(node.left, nums);
    buildNums(node.right, nums);
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
