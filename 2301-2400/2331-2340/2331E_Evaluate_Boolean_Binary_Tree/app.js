// 2331. Evaluate Boolean Binary Tree
// https://leetcode.com/problems/evaluate-boolean-binary-tree/description/
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
var evaluateTree = function (root) {
  return dfs(root);

  function dfs(node) {
    if (!node.left && !node.right) return !!node.val;

    const left = dfs(node.left);
    const right = dfs(node.right);

    if (node.val === 2) return left || right;
    if (node.val === 3) return left && right;
  }
};

// [2, 1, 3, null, null, 0, 1];
var root = {
  val: 2,
  left: {
    val: 1,
    left: null,
    right: null,
  },
  right: {
    val: 3,
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
var expected = true;
var result = evaluateTree(root);
console.log(result, result === expected);

// [0];
var root = {
  val: 0,
  left: null,
  right: null,
};
var expected = false;
var result = evaluateTree(root);
console.log(result, result === expected);
