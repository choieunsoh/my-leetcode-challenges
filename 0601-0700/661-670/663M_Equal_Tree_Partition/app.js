// 663. Equal Tree Partition
// https://leetcode.com/problems/equal-tree-partition/description/
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
 * @return {boolean}
 */
var checkEqualTree = function (root) {
  const total = sumTree(root);
  if (total % 2) return false;

  const target = total / 2;
  let result = false;
  dfs(root);
  return result;

  function sumTree(node) {
    if (!node) return 0;
    return node.val + sumTree(node.left) + sumTree(node.right);
  }

  function dfs(node) {
    if (!node) return 0;

    let leftSum = undefined;
    if (node.left) {
      leftSum = dfs(node.left);
    }

    let rightSum = undefined;
    if (node.right) {
      rightSum = dfs(node.right);
    }

    if (leftSum === target || rightSum === target) {
      result = true;
    }

    return (leftSum ?? 0) + (rightSum ?? 0) + (node.val ?? 0);
  }
};

// [5, 10, 10, null, null, 2, 3];
var root = {
  val: 5,
  left: {
    val: 10,
    left: null,
    right: null,
  },
  right: {
    val: 10,
    left: {
      val: 2,
      left: null,
      right: null,
    },
    right: {
      val: 3,
      left: null,
      right: null,
    },
  },
};
var expected = true;
var result = checkEqualTree(root);
console.log(result, result === expected);

// [1, 2, 10, null, null, 2, 20];
var root = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null,
  },
  right: {
    val: 10,
    left: {
      val: 2,
      left: null,
      right: null,
    },
    right: {
      val: 20,
      left: null,
      right: null,
    },
  },
};
var expected = false;
var result = checkEqualTree(root);
console.log(result, result === expected);

// [0, -1, 1];
var root = {
  val: 0,
  left: {
    val: -1,
    left: null,
    right: null,
  },
  right: {
    val: 1,
    left: null,
    right: null,
  },
};
var expected = false;
var result = checkEqualTree(root);
console.log(result, result === expected);

// [1, -1];
var root = {
  val: 1,
  left: {
    val: -1,
    left: null,
    right: null,
  },
  right: null,
};
var expected = false;
var result = checkEqualTree(root);
console.log(result, result === expected);
