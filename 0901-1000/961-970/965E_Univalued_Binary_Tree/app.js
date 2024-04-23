// 965. Univalued Binary Tree
// https://leetcode.com/problems/univalued-binary-tree/description/
// T.C.: O(n)
// S.C.: O(1)
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
var isUnivalTree = function (root) {
  const value = root.val;
  let queue = [root];
  while (queue.length) {
    const newQueue = [];
    for (const node of queue) {
      if (node.val !== value) return false;
      if (node.left) newQueue.push(node.left);
      if (node.right) newQueue.push(node.right);
    }
    queue = newQueue;
  }
  return true;
};

// [1, 1, 1, 1, 1, null, 1];
var root = {
  val: 1,
  left: {
    val: 1,
    left: {
      val: 1,
      left: null,
      right: null,
    },
    right: {
      val: 1,
      left: null,
      right: null,
    },
  },
  right: {
    val: 1,
    left: null,
    right: {
      val: 1,
      left: null,
      right: null,
    },
  },
};
var expected = true;
var result = isUnivalTree(root);
console.log(result, result === expected);

// [2, 2, 2, 5, 2];
var root = {
  val: 2,
  left: {
    val: 2,
    left: {
      val: 5,
      left: null,
      right: null,
    },
    right: {
      val: 2,
      left: null,
      right: null,
    },
  },
  right: {
    val: 2,
    left: null,
    right: null,
  },
};
var expected = false;
var result = isUnivalTree(root);
console.log(result, result === expected);
