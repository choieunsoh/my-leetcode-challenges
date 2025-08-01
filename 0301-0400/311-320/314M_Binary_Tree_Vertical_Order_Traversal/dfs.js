// 314. Binary Tree Vertical Order Traversal
// https://leetcode.com/problems/binary-tree-vertical-order-traversal/description/
// T.C. O(W * H log H)
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
  let [minColumn, maxColumn] = [0, 0];
  dfs(root, 0, 0);

  for (let column = minColumn; column <= maxColumn; column++) {
    if (map.has(column)) {
      result.push(
        map
          .get(column)
          .sort((a, b) => a[0] - b[0])
          .map((item) => item[1])
      );
    }
  }

  return result;

  function dfs(node, row, column) {
    if (!node) return;

    if (!map.has(column)) {
      map.set(column, []);
    }

    map.get(column).push([row, node.val]);
    minColumn = Math.min(minColumn, column);
    maxColumn = Math.max(maxColumn, column);

    dfs(node.left, row + 1, column - 1);
    dfs(node.right, row + 1, column + 1);
  }
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
