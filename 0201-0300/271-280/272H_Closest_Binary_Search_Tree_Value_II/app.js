// 272. Closest Binary Search Tree Value II
// https://leetcode.com/problems/closest-binary-search-tree-value-ii/description/
// T.C.: O(n)
// S.C.: O(n+k)
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
 * @param {number} target
 * @param {number} k
 * @return {number[]}
 */
var closestKValues = function (root, target, k) {
  const queue = [];
  let index = 0;
  dfs(root);
  return queue.slice(index);

  function dfs(node) {
    if (!node) return;

    dfs(node.left);
    queue.push(node.val);

    if (queue.length - index > k) {
      const firstDiff = Math.abs(queue[index] - target);
      const lastDiff = Math.abs(queue[queue.length - 1] - target);
      if (firstDiff > lastDiff) {
        index++;
      } else {
        queue.pop();
      }
    }

    dfs(node.right);
  }
};

// [4,2,5,1,3]
var root = {
    val: 4,
    left: {
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
    },
    right: {
      val: 5,
      left: null,
      right: null,
    },
  },
  target = 3.714286,
  k = 2;
var expected = [4, 3];
var result = closestKValues(root, target, k);
console.log(result, result.sort().join() === expected.sort().join());

// [1]
var root = {
    val: 1,
    left: null,
    right: null,
  },
  target = 0.0,
  k = 1;
var expected = [1];
var result = closestKValues(root, target, k);
console.log(result, result.sort().join() === expected.sort().join());
