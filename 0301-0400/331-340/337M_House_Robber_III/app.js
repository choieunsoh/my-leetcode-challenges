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
  const robMemo = new Map();
  const notRobMemo = new Map();
  const money = robNode(root, false);
  return money;

  function robNode(node, parentRobbed) {
    if (!node) return 0;

    if (parentRobbed) {
      if (robMemo.has(node)) return robMemo.get(node);

      const money = robNode(node.left, false) + robNode(node.right, false);
      robMemo.set(node, money);
      return money;
    } else {
      if (notRobMemo.has(node)) return notRobMemo.get(node);

      const robMoney = robNode(node.left, true) + robNode(node.right, true) + node.val;
      const notRobMoney = robNode(node.left, false) + robNode(node.right, false);
      const money = Math.max(robMoney, notRobMoney);
      notRobMemo.set(node, money);
      return money;
    }
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
