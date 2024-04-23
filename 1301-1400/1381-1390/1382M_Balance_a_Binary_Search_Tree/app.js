// 1382. Balance a Binary Search Tree
// https://leetcode.com/problems/balance-a-binary-search-tree/description/
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
 * @return {TreeNode}
 */
var balanceBST = function (root) {
  const sortedNodes = [];
  inorder(root);
  return buildTree(0, sortedNodes.length - 1);

  function inorder(node) {
    if (!node) return [];
    inorder(node.left);
    sortedNodes.push(node);
    inorder(node.right);
  }

  function buildTree(left, right) {
    if (left > right) return null;
    const mid = (left + right) >> 1;
    const node = sortedNodes[mid];
    node.left = buildTree(left, mid - 1);
    node.right = buildTree(mid + 1, right);
    return node;
  }
};

// [1, null, 2, null, 3, null, 4, null, null];
var root = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: null,
    right: {
      val: 3,
      left: null,
      right: {
        val: 4,
        left: null,
        right: null,
      },
    },
  },
};
// [2, 1, 3, null, null, null, 4];
var expected = {
  val: 2,
  left: {
    val: 1,
    left: null,
    right: null,
  },
  right: {
    val: 3,
    left: null,
    right: {
      val: 4,
      left: null,
      right: null,
    },
  },
};
var result = balanceBST(root);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

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
// [2, 1, 3];
var expected = {
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
var result = balanceBST(root);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));
