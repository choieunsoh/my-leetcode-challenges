// 776. Split BST
// https://leetcode.com/problems/split-bst/description/
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
 * @param {number} target
 * @return {TreeNode[]}
 */
var splitBST = function (root, target) {
  let leftSubtree = null;
  let rightSubtree = null;

  const stack = [];
  let node = root;
  while (node) {
    stack.push(node);
    if (node.val > target) {
      node = node.left;
    } else {
      node = node.right;
    }
  }

  while (stack.length) {
    const node = stack.pop();
    if (node.val > target) {
      node.left = rightSubtree;
      rightSubtree = node;
    } else {
      node.right = leftSubtree;
      leftSubtree = node;
    }
  }

  return [leftSubtree, rightSubtree];
};

// [4, 2, 6, 1, 3, 5, 7],
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
      val: 6,
      left: {
        val: 5,
        left: null,
        right: null,
      },
      right: {
        val: 7,
        left: null,
        right: null,
      },
    },
  },
  target = 2;
var expected = [
  // [2, 1]
  {
    val: 2,
    left: {
      val: 1,
      left: null,
      right: null,
    },
    right: null,
  },
  // [4, 3, 6, null, null, 5, 7]
  {
    val: 4,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: {
      val: 6,
      left: {
        val: 5,
        left: null,
        right: null,
      },
      right: {
        val: 7,
        left: null,
        right: null,
      },
    },
  },
];
var result = splitBST(root, target);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

var root = {
    val: 1,
    left: null,
    right: null,
  },
  target = 1;
var expected = [
  {
    val: 1,
    left: null,
    right: null,
  },
  null,
];
var result = splitBST(root, target);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));
