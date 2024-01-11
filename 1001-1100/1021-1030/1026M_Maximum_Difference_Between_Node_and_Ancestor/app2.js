// 1026. Maximum Difference Between Node and Ancestor
// https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/description/
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
 * @return {number}
 */
var maxAncestorDiff = function (root, min = root?.val ?? 0, max = root?.val ?? 0) {
  if (!root) return max - min;

  min = Math.min(min, root.val);
  max = Math.max(max, root.val);

  const left = maxAncestorDiff(root.left, min, max);
  const right = maxAncestorDiff(root.right, min, max);
  return Math.max(left, right);
};

//var root = [8, 3, 10, 1, 6, null, 14, null, null, 4, 7, 13];
var root = {
  val: 8,
  left: {
    val: 3,
    left: {
      val: 1,
    },
    right: {
      val: 6,
      left: {
        val: 4,
      },
      right: {
        val: 7,
      },
    },
  },
  right: {
    val: 10,
    right: {
      val: 14,
      left: {
        val: 13,
      },
    },
  },
};
var expected = 7;
var result = maxAncestorDiff(root);
console.log(result, result === expected);

//var root = [1, null, 2, null, 0, 3];
var root = {
  val: 1,
  right: {
    val: 2,
    right: {
      val: 0,
      left: {
        val: 3,
      },
    },
  },
};
var expected = 3;
var result = maxAncestorDiff(root);
console.log(result, result === expected);

//var root = [2, 5, 0, null, null, 4, null, null, 6, 1, null, 3];
/*
        2
    5       0
          4
            6
          1
            3
*/
var root = {
  val: 2,
  left: {
    val: 5,
  },
  right: {
    val: 0,
    left: {
      val: 4,
      right: {
        val: 6,
        left: {
          val: 1,
          right: {
            val: 3,
          },
        },
      },
    },
  },
};
var expected = 6;
var result = maxAncestorDiff(root);
console.log(result, result === expected);
