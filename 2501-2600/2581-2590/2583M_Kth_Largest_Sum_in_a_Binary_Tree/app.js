// 2583. Kth Largest Sum in a Binary Tree
// https://leetcode.com/problems/kth-largest-sum-in-a-binary-tree/
// T.C.: O(log n * log k)
// S.C.: O(n)
const { TreeNode, createTree, inOrder } = require('../../../_utils/tree');
const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
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
 * @param {number} k
 * @return {number}
 */
var kthLargestLevelSum = function (root, k) {
  const pq = new MinPriorityQueue({ priority: (a) => a });
  let q = [root];
  while (q.length) {
    const newQ = [];
    let sum = 0;
    for (let i = 0; i < q.length; i++) {
      const node = q[i];
      sum += node.val;
      if (node.left) newQ.push(node.left);
      if (node.right) newQ.push(node.right);
    }

    pq.enqueue(sum);
    if (pq.size() > k) pq.dequeue();

    q = newQ;
  }

  if (pq.size() < k) return -1;
  return pq.front().element;
};

var root = createTree([5, 8, 9, 2, 1, 3, 7, 4, 6]),
  k = 2;
var expected = 13;
var result = kthLargestLevelSum(root, k);
console.log(result, result === expected);

var root = createTree([1, 2, null, 3]),
  k = 1;
var expected = 3;
var result = kthLargestLevelSum(root, k);
console.log(result, result === expected);

var root = createTree([1, 2, null, 3]),
  k = 9;
var expected = -1;
var result = kthLargestLevelSum(root, k);
console.log(result, result === expected);
