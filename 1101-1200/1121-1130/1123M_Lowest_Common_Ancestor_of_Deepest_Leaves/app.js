// 1123. Lowest Common Ancestor of Deepest Leaves
// https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/description/
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
 * @return {TreeNode}
 */
var lcaDeepestLeaves = function (root) {
  const [node] = dfs(root);
  return node;

  function dfs(node) {
    if (!node) return [null, 0];
    const [leftNode, leftDepth] = dfs(node.left);
    const [rightNode, rightDepth] = dfs(node.right);
    if (leftDepth > rightDepth) return [leftNode, leftDepth + 1];
    if (leftDepth < rightDepth) return [rightNode, rightDepth + 1];
    return [node, leftDepth + 1];
  }
};

// [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4];
var root = {
  val: 3,
  left: {
    val: 5,
    left: {
      val: 6,
      left: null,
      right: null,
    },
    right: {
      val: 2,
      left: {
        val: 7,
        left: null,
        right: null,
      },
      right: {
        val: 4,
        left: null,
        right: null,
      },
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
      val: 8,
      left: null,
      right: null,
    },
  },
};
// [2, 7, 4];
var expected = {
  val: 2,
  left: {
    val: 7,
    left: null,
    right: null,
  },
  right: {
    val: 4,
    left: null,
    right: null,
  },
};
var result = lcaDeepestLeaves(root);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

// [1];
var root = {
  val: 1,
  left: null,
  right: null,
};
// [1];
var expected = {
  val: 1,
  left: null,
  right: null,
};
var result = lcaDeepestLeaves(root);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

// [0, 1, 3, null, 2];
var root = {
  val: 0,
  left: {
    val: 1,
    left: null,
    right: {
      val: 2,
      left: null,
      right: null,
    },
  },
  right: {
    val: 3,
    left: null,
    right: null,
  },
};
// [2];
var expected = {
  val: 2,
  left: null,
  right: null,
};
var result = lcaDeepestLeaves(root);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));
