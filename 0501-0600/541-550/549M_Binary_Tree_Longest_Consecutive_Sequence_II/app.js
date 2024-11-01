// 549. Binary Tree Longest Consecutive Sequence II
// https://leetcode.com/problems/binary-tree-longest-consecutive-sequence-ii/description/
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
var longestConsecutive = function (root) {
  let longest = 0;
  longestPath(root);
  return longest;

  function longestPath(node) {
    if (!node) return [0, 0];

    let [increase, decrease] = [1, 1];
    if (node.left) {
      const [leftIncrease, leftDecrease] = longestPath(node.left);
      if (node.val === node.left.val + 1) {
        decrease = leftDecrease + 1;
      } else if (node.val === node.left.val - 1) {
        increase = leftIncrease + 1;
      }
    }

    if (node.right) {
      const [rightIncrease, rightDecrease] = longestPath(node.right);
      if (node.val === node.right.val + 1) {
        decrease = Math.max(decrease, rightDecrease + 1);
      } else if (node.val === node.right.val - 1) {
        increase = Math.max(increase, rightIncrease + 1);
      }
    }

    longest = Math.max(longest, increase + decrease - 1);
    return [increase, decrease];
  }
};

// [1,2,3]
var root = {
  val: 1,
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
};
var expected = 2;
var result = longestConsecutive(root);
console.log(result, result === expected);

// [2, 1, 3];
var root = {
  val: 2,
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
};
var expected = 3;
var result = longestConsecutive(root);
console.log(result, result === expected);
