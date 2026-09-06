// 156. Binary Tree Upside Down
// https://leetcode.com/problems/binary-tree-upside-down/description/
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
 * @return {TreeNode}
 */
var upsideDownBinaryTree = function (root) {
  let node = root;
  let parent = null;
  let right = null;
  while (node != null) {
    const next = node.left;
    node.left = right;
    right = node.right;
    node.right = parent;
    parent = node;
    node = next;
  }
  return parent;
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
// [4, 5, 2, null, null, 3, 1];
var expected = {
  val: 4,
  left: {
    val: 5,
    left: null,
    right: null,
  },
  right: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: {
      val: 1,
      left: null,
      right: null,
    },
  },
};
var result = upsideDownBinaryTree(root);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

var root = null;
var expected = null;
var result = upsideDownBinaryTree(root);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

var root = {
  val: 1,
  left: null,
  right: null,
};
var expected = {
  val: 1,
  left: null,
  right: null,
};
var result = upsideDownBinaryTree(root);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));
