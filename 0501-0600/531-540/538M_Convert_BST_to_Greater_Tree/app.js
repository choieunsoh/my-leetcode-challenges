// 538. Convert BST to Greater Tree
// https://leetcode.com/problems/convert-bst-to-greater-tree/description/
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
var convertBST = function (root) {
  let sum = 0;
  dfs(root);
  return root;

  function dfs(node) {
    if (!node) return;

    dfs(node.right);
    sum += node.val;
    node.val = sum;
    dfs(node.left);
  }
};

// [4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
var root = {
  val: 4,
  left: {
    val: 1,
    left: {
      val: 0,
      left: null,
      right: null,
    },
    right: {
      val: 2,
      left: null,
      right: {
        val: 3,
        left: null,
        right: null,
      },
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
      right: {
        val: 8,
        left: null,
        right: null,
      },
    },
  },
};
// [30, 36, 21, 36, 35, 26, 15, null, null, null, 33, null, null, null, 8]
var expected = {
  val: 30,
  left: {
    val: 36,
    left: {
      val: 36,
      left: null,
      right: null,
    },
    right: {
      val: 35,
      left: null,
      right: {
        val: 33,
        left: null,
        right: null,
      },
    },
  },
  right: {
    val: 21,
    left: {
      val: 26,
      left: null,
      right: null,
    },
    right: {
      val: 15,
      left: null,
      right: {
        val: 8,
        left: null,
        right: null,
      },
    },
  },
};
var result = convertBST(root);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

// [0,null,1]
var root = {
  val: 0,
  left: null,
  right: {
    val: 1,
    left: null,
    right: null,
  },
};
// [1, null, 1];
var expected = {
  val: 1,
  left: null,
  right: {
    val: 1,
    left: null,
    right: null,
  },
};
var result = convertBST(root);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));
