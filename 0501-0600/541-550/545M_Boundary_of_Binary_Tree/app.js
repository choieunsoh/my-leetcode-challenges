// 545. Boundary of Binary Tree
// https://leetcode.com/problems/boundary-of-binary-tree/description/
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
 * @return {number[]}
 */
var boundaryOfBinaryTree = function (root) {
  const leftNodes = [];
  if (!isLeafNode(root)) leftNodes.push(root.val);

  let node = root.left;
  while (node) {
    if (!isLeafNode(node)) leftNodes.push(node.val);
    node = node.left ?? node.right;
  }

  addLeafNodes(root);
  const rightNodes = [];
  node = root.right;
  while (node) {
    if (!isLeafNode(node)) rightNodes.push(node.val);
    node = node.right ?? node.left;
  }
  rightNodes.reverse();

  return [...leftNodes, ...rightNodes];

  function addLeafNodes(root) {
    if (!root) return;
    if (isLeafNode(root)) {
      leftNodes.push(root.val);
    }
    addLeafNodes(root.left);
    addLeafNodes(root.right);
  }

  function isLeafNode(node) {
    return !node.left && !node.right;
  }
};

// [1, null, 2, 3, 4];
var root = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: {
      val: 4,
      left: null,
      right: null,
    },
  },
};
var expected = [1, 3, 4, 2];
var result = boundaryOfBinaryTree(root);
console.log(result, result.join() === expected.join());

// [1, 2, 3, 4, 5, 6, null, null, null, 7, 8, 9, 10];
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
      left: {
        val: 7,
        left: null,
        right: null,
      },
      right: {
        val: 8,
        left: null,
        right: null,
      },
    },
  },
  right: {
    val: 3,
    left: {
      val: 6,
      left: {
        val: 9,
        left: null,
        right: null,
      },
      right: {
        val: 10,
        left: null,
        right: null,
      },
    },
    right: null,
  },
};
var expected = [1, 2, 4, 7, 8, 9, 10, 6, 3];
var result = boundaryOfBinaryTree(root);
console.log(result, result.join() === expected.join());

// [1, 2, 3, 4, 5, 6, null, null, null, 7, 8, 9, 10];
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
      left: {
        val: 7,
        left: null,
        right: null,
      },
      right: {
        val: 8,
        left: {
          val: 11,
          left: null,
          right: null,
        },
        right: null,
      },
    },
  },
  right: {
    val: 3,
    left: {
      val: 6,
      left: {
        val: 9,
        left: null,
        right: null,
      },
      right: {
        val: 10,
        left: null,
        right: null,
      },
    },
    right: {
      val: 12,
      left: {
        val: 13,
        left: null,
        right: null,
      },
      right: null,
    },
  },
};
var expected = [1, 2, 4, 7, 11, 9, 10, 13, 12, 3];
var result = boundaryOfBinaryTree(root);
console.log(result, result.join() === expected.join());

// [1];
var root = {
  val: 1,
  left: null,
  right: null,
};
var expected = [1];
var result = boundaryOfBinaryTree(root);
console.log(result, result.join() === expected.join());
