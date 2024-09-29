// 337. House Robber III
// https://leetcode.com/problems/house-robber-iii/description/
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
var rob = function (root) {
  const [robMoney, notRobMoney] = robNode(root);
  return Math.max(robMoney, notRobMoney);

  function robNode(node) {
    if (!node) return [0, 0];

    const [robLeft, notRobLeft] = robNode(node.left);
    const [robRight, notRobRight] = robNode(node.right);

    const robMoney = node.val + notRobLeft + notRobRight;
    const notRobMoney = Math.max(robLeft, notRobLeft) + Math.max(robRight, notRobRight);

    return [robMoney, notRobMoney];
  }
};

// [3,2,3,null,3,null,1]
var root = {
  val: 3,
  left: {
    val: 2,
    left: null,
    right: {
      val: 3,
      left: null,
      right: null,
    },
  },
  right: {
    val: 3,
    left: null,
    right: {
      val: 1,
      left: null,
      right: null,
    },
  },
};
var expected = 7;
var result = rob(root);
console.log(result, result === expected);

// [3,4,5,1,3,null,1]
var root = {
  val: 3,
  left: {
    val: 4,
    left: {
      val: 1,
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
    val: 5,
    left: null,
    right: {
      val: 1,
      left: null,
      right: null,
    },
  },
};
var expected = 9;
var result = rob(root);
console.log(result, result === expected);
