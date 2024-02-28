// 513. Find Bottom Left Tree Value
// https://leetcode.com/problems/find-bottom-left-tree-value/description/
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
var findBottomLeftValue = function (root) {
  let result = 0;
  let currentLevel = 0;
  dfs(root, 0);
  return result;

  function dfs(root, level) {
    if (!root) return;
    if (level === currentLevel) {
      result = root.val;
      currentLevel = level + 1;
    }

    dfs(root.left, level + 1);
    dfs(root.right, level + 1);
  }
};

// [2, 1, 3];
var root = {
  val: 2,
  left: { val: 1 },
  right: { val: 3 },
};
var expected = 1;
var result = findBottomLeftValue(root);
console.log(result, result === expected);

// [1, 2, 3, 4, null, 5, 6, null, null, 7];
var root = {
  val: 2,
  left: {
    val: 1,
    left: { val: 4 },
  },
  right: {
    val: 3,
    left: {
      val: 5,
      left: { val: 7 },
    },
    right: { val: 6 },
  },
};
var expected = 7;
var result = findBottomLeftValue(root);
console.log(result, result === expected);

// [0, -1];
var root = {
  val: 0,
  left: { val: -1 },
};
var expected = -1;
var result = findBottomLeftValue(root);
console.log(result, result === expected);
