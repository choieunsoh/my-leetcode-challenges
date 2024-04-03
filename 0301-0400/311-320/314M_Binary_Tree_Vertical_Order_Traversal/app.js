// 314. Binary Tree Vertical Order Traversal
// https://leetcode.com/problems/binary-tree-vertical-order-traversal/description/
// T.C. O(N)
// S.C. O(N)
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
var verticalOrder = function (root) {
  const result = [];
  if (!root || root.val === undefined) return result;

  const map = new Map();
  let [minOffset, maxOffset] = [0, 0];
  let queue = [[root, 0]];
  while (queue.length) {
    const newQueue = [];
    for (const [node, offset] of queue) {
      if (!map.has(offset)) {
        map.set(offset, []);
      }

      map.get(offset).push(node.val);
      minOffset = Math.min(minOffset, offset);
      maxOffset = Math.max(maxOffset, offset);

      if (node.left) newQueue.push([node.left, offset - 1]);
      if (node.right) newQueue.push([node.right, offset + 1]);
    }
    queue = newQueue;
  }
  for (let offset = minOffset; offset <= maxOffset; offset++) {
    if (map.has(offset)) {
      result.push(map.get(offset));
    }
  }
  return result;
};

// [3, 9, 20, null, null, 15, 7];
var root = {
  val: 3,
  left: { val: 9, left: null, right: null },
  right: {
    val: 20,
    left: { val: 15, left: null, right: null },
    right: { val: 7, left: null, right: null },
  },
};
var expected = [[9], [3, 15], [20], [7]];
var result = verticalOrder(root);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

// [3, 9, 8, 4, 0, 1, 7];
var root = {
  val: 3,
  left: {
    val: 9,
    left: { val: 4, left: null, right: null },
    right: { val: 0, left: null, right: null },
  },
  right: {
    val: 8,
    left: { val: 1, left: null, right: null },
    right: { val: 7, left: null, right: null },
  },
};
var expected = [[4], [9], [3, 0, 1], [8], [7]];
var result = verticalOrder(root);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

// [3, 9, 8, 4, 0, 1, 7, null, null, null, 2, 5];
var root = {
  val: 3,
  left: {
    val: 9,
    left: { val: 4, left: null, right: null },
    right: {
      val: 0,
      left: null,
      right: {
        val: 2,
        left: null,
        right: null,
      },
    },
  },
  right: {
    val: 8,
    left: {
      val: 1,
      left: {
        val: 5,
        left: null,
        right: null,
      },
      right: null,
    },
    right: { val: 7, left: null, right: null },
  },
};
var expected = [[4], [9, 5], [3, 0, 1], [8, 2], [7]];
var result = verticalOrder(root);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

var root = {};
var expected = [];
var result = verticalOrder(root);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

var root = null;
var expected = [];
var result = verticalOrder(root);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));
