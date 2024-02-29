// 1973. Count Nodes Equal to Sum of Descendants
// https://leetcode.com/problems/count-nodes-equal-to-sum-of-descendants/description/
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
var equalToDescendants = function (root) {
  let result = 0;
  dfs(root);
  return result;

  function dfs(node) {
    if (!node) return 0;

    const leftSum = dfs(node.left);
    const rightSum = dfs(node.right);
    if (leftSum + rightSum === node.val) {
      result++;
    }
    return node.val + leftSum + rightSum;
  }
};

// [10,3,4,2,1]
var root = {
  val: 10,
  left: {
    val: 3,
    left: { val: 2 },
    right: { val: 1 },
  },
  right: {
    val: 4,
  },
};
var expected = 2;
var result = equalToDescendants(root);
console.log(result, result === expected);

// [2,3,null,2,null]
var root = {
  val: 2,
  left: {
    val: 3,
    left: { val: 2 },
  },
};
var expected = 0;
var result = equalToDescendants(root);
console.log(result, result === expected);

// [0]
var root = {
  val: 0,
};
var expected = 1;
var result = equalToDescendants(root);
console.log(result, result === expected);

// [5,2,null,1,null,null,2]
/*
      5
     /
    2
   /
  1
   \
    2
*/
var root = {
  val: 5,
  left: {
    val: 2,
    left: {
      val: 1,
      right: { val: 2 },
    },
  },
};
var expected = 1;
var result = equalToDescendants(root);
console.log(result, result === expected);
