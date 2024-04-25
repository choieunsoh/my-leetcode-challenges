// 333. Largest BST Subtree
// https://leetcode.com/problems/largest-bst-subtree/description/
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
var largestBSTSubtree = function (root) {
  const [result] = dfs(root);
  return result;

  function dfs(node) {
    if (!node) return [0, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];

    const [leftSize, leftMin, leftMax] = dfs(node.left);
    const [rightSize, rightMin, rightMax] = dfs(node.right);

    // Valid BST
    if (node.val > leftMax && node.val < rightMin) {
      const newSize = leftSize + rightSize + 1;
      const newMin = Math.min(node.val, leftMin);
      const newMax = Math.max(node.val, rightMax);
      return [newSize, newMin, newMax];
    }

    // Invalid BST
    return [Math.max(leftSize, rightSize), Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER];
  }
};

// [10,5,15,1,8,null,7]
var root = {
  val: 10,
  left: {
    val: 5,
    left: {
      val: 1,
      left: null,
      right: null,
    },
    right: {
      val: 8,
      left: null,
      right: null,
    },
  },
  right: {
    val: 15,
    left: null,
    right: {
      val: 7,
      left: null,
      right: null,
    },
  },
};
var expected = 3;
var result = largestBSTSubtree(root);
console.log(result, result === expected);

// [4, 2, 7, 2, 3, 5, null, 2, null, null, null, null, null, 1];
var root = {
  val: 4,
  left: {
    val: 2,
    left: {
      val: 2,
      left: {
        val: 2,
        left: {
          val: 1,
          left: null,
          right: null,
        },
        right: null,
      },
      right: null,
    },
    right: {
      val: 3,
      left: null,
      right: null,
    },
  },
  right: {
    val: 7,
    left: {
      val: 5,
      left: null,
      right: null,
    },
    right: null,
  },
};
var expected = 2;
var result = largestBSTSubtree(root);
console.log(result, result === expected);
