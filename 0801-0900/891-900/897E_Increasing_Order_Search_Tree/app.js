// 897. Increasing Order Search Tree
// https://leetcode.com/problems/increasing-order-search-tree/description/
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
var increasingBST = function (root) {
  const result = new TreeNode(0);
  let curr = result;
  inorder(root);
  return result.right;

  function inorder(node) {
    if (node.left) inorder(node.left);
    curr.right = new TreeNode(node.val);
    curr = curr.right;
    if (node.right) inorder(node.right);
  }
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// [5, 3, 6, 2, 4, null, 8, 1, null, null, null, 7, 9];
var root = {
  val: 5,
  left: {
    val: 3,
    left: {
      val: 2,
      left: {
        val: 1,
        left: null,
        right: null,
      },
      right: null,
    },
    right: {
      val: 4,
      left: null,
      right: null,
    },
  },
  right: {
    val: 6,
    left: null,
    right: {
      val: 8,
      left: {
        val: 7,
        left: null,
        right: null,
      },
      right: {
        val: 9,
        left: null,
        right: null,
      },
    },
  },
};
// [1, null, 2, null, 3, null, 4, null, 5, null, 6, null, 7, null, 8, null, 9];
var expected = {
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
        right: {
          val: 5,
          left: null,
          right: {
            val: 6,
            left: null,
            right: {
              val: 7,
              left: null,
              right: {
                val: 8,
                left: null,
                right: {
                  val: 9,
                  left: null,
                  right: null,
                },
              },
            },
          },
        },
      },
    },
  },
};
var result = increasingBST(root);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

// [5, 1, 7];
var root = {
  val: 5,
  left: {
    val: 1,
    left: null,
    right: null,
  },
  right: {
    val: 7,
    left: null,
    right: null,
  },
};
// [1, null, 5, null, 7];
var expected = {
  val: 1,
  left: null,
  right: {
    val: 5,
    left: null,
    right: {
      val: 7,
      left: null,
      right: null,
    },
  },
};
var result = increasingBST(root);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));
