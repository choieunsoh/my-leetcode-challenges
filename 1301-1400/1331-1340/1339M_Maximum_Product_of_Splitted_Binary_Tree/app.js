// 1339. Maximum Product of Splitted Binary Tree
// https://leetcode.com/problems/maximum-product-of-splitted-binary-tree/description/
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
var maxProduct = function (root) {
  let result = 0;
  const MOD = 1e9 + 7;
  const totalTreeSum = treeSum(root);
  treeSum(root, true);
  return result % MOD;

  function treeSum(root, updateResult = false) {
    if (root === null) return 0;

    const leftSum = treeSum(root.left, updateResult);
    const rightSum = treeSum(root.right, updateResult);
    const rootSum = root.val + leftSum + rightSum;

    if (updateResult) {
      result = Math.max(result, rootSum * (totalTreeSum - rootSum));
    }

    return rootSum;
  }
};

// [1, 2, 3, 4, 5, 6];
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
    right: null,
  },
};
var expected = 110;
var result = maxProduct(root);
console.log(result, result === expected);

// [1, null, 2, 3, 4, null, null, 5, 6];
var root = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: {
      val: 3,
      left: null,
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
        val: 6,
        left: null,
        right: null,
      },
    },
  },
};
var expected = 90;
var result = maxProduct(root);
console.log(result, result === expected);
