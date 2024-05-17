// 1325. Delete Leaves With a Given Value
// https://leetcode.com/problems/delete-leaves-with-a-given-value/description/
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
 * @return {TreeNode}
 */
var removeLeafNodes = function (root, target) {
  if (!root) return null;

  root.left = removeLeafNodes(root.left, target);
  root.right = removeLeafNodes(root.right, target);

  if (root.val === target && root.left === null && root.right === null) return null;

  return root;
};

// [1,2,3,2,null,2,4],
var root = {
    val: 1,
    left: {
      val: 2,
      left: {
        val: 2,
        left: null,
        right: null,
      },
      right: null,
    },
    right: {
      val: 3,
      left: {
        val: 2,
        left: null,
        right: null,
      },
      right: {
        val: 4,
        left: null,
        right: null,
      },
    },
  },
  target = 2;
// [1, null, 3, null, 4];
var expected = {
  val: 1,
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
};
var result = removeLeafNodes(root, target);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

// [1, 3, 3, 3, 2],
var root = {
    val: 1,
    left: {
      val: 3,
      left: {
        val: 3,
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
      val: 3,
      left: null,
      right: null,
    },
  },
  target = 3;
// [1, 3, null, null, 2];
var expected = {
  val: 1,
  left: {
    val: 3,
    left: null,
    right: {
      val: 2,
      left: null,
      right: null,
    },
  },
  right: null,
};
var result = removeLeafNodes(root, target);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

// [1, 2, null, 2, null, 2],
var root = {
    val: 1,
    left: {
      val: 2,
      left: {
        val: 2,
        left: {
          val: 2,
          left: null,
          right: null,
        },
        right: null,
      },
      right: null,
    },
    right: null,
  },
  target = 2;
// [1];
var expected = {
  val: 1,
  left: null,
  right: null,
};
var result = removeLeafNodes(root, target);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));
