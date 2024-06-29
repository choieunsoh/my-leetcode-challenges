// 776. Split BST
// https://leetcode.com/problems/split-bst/description/
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
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {TreeNode[]}
 */
var splitBST = function (root, target) {
  const dummyLeft = new TreeNode(0);
  const dummyRight = new TreeNode(0);
  let currLeft = dummyLeft;
  let currRight = dummyRight;

  let curr = root;
  let next = null;
  while (curr) {
    if (curr.val > target) {
      // Attach the current node to the tree
      // with values greater to the target
      currRight.left = curr;
      currRight = curr;

      // Move to the left subtree
      next = curr.left;

      // Clear the left pointer of current node
      currRight.left = null;

      curr = next;
    } else {
      // Attach the current node to the tree
      // with values less than or equal to the target
      currLeft.right = curr;
      currLeft = curr;

      // Move to the right subtree
      next = curr.right;

      // Clear the right pointer of current node
      currLeft.right = null;

      curr = next;
    }
  }

  return [dummyLeft.right, dummyRight.left];
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
