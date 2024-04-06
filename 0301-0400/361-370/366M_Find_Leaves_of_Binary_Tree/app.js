// 366. Find Leaves of Binary Tree
// https://leetcode.com/problems/find-leaves-of-binary-tree/description/
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
 * @return {number[][]}
 */
var findLeaves = function (root) {
  const result = [];
  getHeight(root);
  return result;

  function getHeight(root) {
    if (!root) return -1;

    const leftHeight = getHeight(root.left);
    const rightHeight = getHeight(root.right);
    const height = Math.max(leftHeight, rightHeight) + 1;

    if (result.length === height) {
      result.push([]);
    }
    result[height].push(root.val);

    return height;
  }
};

// [1, 2, 3, 4, 5];
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
    left: null,
    right: null,
  },
};
var expected = [[4, 5, 3], [2], [1]];
var result = findLeaves(root);
console.log(result, result.join() === expected.join());

// [1]
var root = {
  val: 1,
  left: null,
  right: null,
};
var expected = [[1]];
var result = findLeaves(root);
console.log(result, result.join() === expected.join());
