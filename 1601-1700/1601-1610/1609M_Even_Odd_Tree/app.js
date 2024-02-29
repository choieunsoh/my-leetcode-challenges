// 1609. Even Odd Tree
// https://leetcode.com/problems/even-odd-tree/description/
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
var isEvenOddTree = function (root) {
  let queue = [root];
  let level = 0;
  while (queue.length) {
    const nextQueue = [];
    let prevVal = undefined;
    for (const node of queue) {
      const isOddVal = node.val & 1;
      const isOddLevel = level & 1;
      if (isOddLevel) {
        if (isOddVal) return false;
        if (prevVal !== undefined && prevVal <= node.val) return false;
      } else {
        if (!isOddVal) return false;
        if (prevVal !== undefined && prevVal >= node.val) return false;
      }

      prevVal = node.val;
      if (node.left) nextQueue.push(node.left);
      if (node.right) nextQueue.push(node.right);
    }
    queue = nextQueue;
    level++;
  }
  return true;
};

// [1,10,4,3,null,7,9,12,8,6,null,null,2]
var root = {
  val: 1,
  left: {
    val: 10,
    left: {
      val: 3,
      left: { val: 12 },
      right: { val: 8 },
    },
  },
  right: {
    val: 4,
    left: {
      val: 7,
      left: { val: 6 },
    },
    right: {
      val: 9,
      right: { val: 2 },
    },
  },
};
var expected = true;
var result = isEvenOddTree(root);
console.log(result, result === expected);

// [5,4,2,3,3,7]
var root = {
  val: 5,
  left: {
    val: 4,
    left: {
      val: 3,
      left: { val: 7 },
    },
  },
  right: {
    val: 2,
    left: { val: 3 },
  },
};
var expected = false;
var result = isEvenOddTree(root);
console.log(result, result === expected);

// [5,9,1,3,5,7]
var root = {
  val: 5,
  left: {
    val: 9,
    left: {
      val: 3,
      left: { val: 7 },
    },
  },
  right: {
    val: 1,
    left: { val: 5 },
  },
};
var expected = false;
var result = isEvenOddTree(root);
console.log(result, result === expected);
