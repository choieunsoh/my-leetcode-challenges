// 687. Longest Univalue Path
// https://leetcode.com/problems/longest-univalue-path/description/
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
 * @typedef {Object} TreeNode
 * @property {number} val
 * @property {TreeNode} left
 * @property {TreeNode} right
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestUnivaluePath = function (root) {
  let result = 0;
  longestEdges(root);
  return result;

  /**
   * @param {TreeNode} root
   * @return {number}
   */
  function longestEdges(root, parentVal = -1) {
    if (!root) return 0;

    const currentVal = root.val;
    const leftEdgeCount = longestEdges(root.left, currentVal);
    const rightEdgeCount = longestEdges(root.right, currentVal);
    result = Math.max(result, leftEdgeCount + rightEdgeCount);

    if (currentVal !== parentVal) return 0;
    return Math.max(leftEdgeCount, rightEdgeCount) + 1;
  }
};

//var root = [5, 4, 5, 1, 1, null, 5];
var root = {
  val: 5,
  left: {
    val: 4,
    left: {
      val: 1,
    },
    right: {
      val: 1,
    },
  },
  right: {
    val: 5,
    right: {
      val: 5,
    },
  },
};
var expected = 2;
var result = longestUnivaluePath(root);
console.log(result, result === expected);

//var root = [1, 4, 5, 4, 4, null, 5];
var root = {
  val: 1,
  left: {
    val: 4,
    left: {
      val: 4,
    },
    right: {
      val: 4,
    },
  },
  right: {
    val: 5,
    right: {
      val: 5,
    },
  },
};
var expected = 2;
var result = longestUnivaluePath(root);
console.log(result, result === expected);

var root = {
  val: 1,
  left: {
    val: 4,
    left: {
      val: 4,
      left: {
        val: 4,
      },
    },
    right: {
      val: 4,
    },
  },
  right: {
    val: 5,
    right: {
      val: 5,
    },
  },
};
var expected = 3;
var result = longestUnivaluePath(root);
console.log(result, result === expected);

var root = {
  val: 1,
  left: {
    val: 4,
    left: {
      val: 4,
      left: {
        val: 4,
      },
    },
    right: {
      val: 4,
      right: {
        val: 4,
        right: {
          val: 4,
        },
      },
    },
  },
  right: {
    val: 5,
    right: {
      val: 5,
    },
  },
};
var expected = 5;
var result = longestUnivaluePath(root);
console.log(result, result === expected);
