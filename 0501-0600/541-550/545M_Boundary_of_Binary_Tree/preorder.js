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
  const rightNodes = [];
  const leafNodes = [];
  preorder(root, 0); // 0: root, 1: left, 2: right, 3: other
  rightNodes.reverse();
  return [...leftNodes, ...leafNodes, ...rightNodes];

  function preorder(root, nodeType) {
    if (!root) return;

    if (isRightBoundary(nodeType)) {
      rightNodes.push(root.val);
    } else if (isRoot(nodeType) || isLeftBoundary(nodeType)) {
      leftNodes.push(root.val);
    } else if (isLeafNode(root)) {
      leafNodes.push(root.val);
    }

    preorder(root.left, leftChildFlag(root, nodeType));
    preorder(root.right, rightChildFlag(root, nodeType));
  }

  function isRoot(type) {
    return type === 0;
  }

  function isLeftBoundary(type) {
    return type === 1;
  }

  function isRightBoundary(type) {
    return type === 2;
  }

  function isLeafNode(node) {
    return !node.left && !node.right;
  }

  function leftChildFlag(node, nodeType) {
    if (isLeftBoundary(nodeType) || isRoot(nodeType)) {
      return 1;
    }
    if (isRightBoundary(nodeType) && node.right === null) {
      return 2;
    }
    return 3;
  }

  function rightChildFlag(node, nodeType) {
    if (isRightBoundary(nodeType) || isRoot(nodeType)) {
      return 2;
    }
    if (isLeftBoundary(nodeType) && node.left === null) {
      return 1;
    }
    return 3;
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
