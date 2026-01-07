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
  let result = 0n;
  const MOD = BigInt(1e9 + 7);
  const allSums = [];
  const totalTreeSum = treeSum(root);
  for (const sumTreeSum of allSums) {
    const product = BigInt(sumTreeSum * (totalTreeSum - sumTreeSum));
    if (product > result) result = product;
  }
  return Number(result % MOD);

  function treeSum(node) {
    if (!node) return 0;
    const leftSum = treeSum(node.left);
    const rightSum = treeSum(node.right);
    const totalSum = node.val + leftSum + rightSum;
    allSums.push(totalSum);
    return totalSum;
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
