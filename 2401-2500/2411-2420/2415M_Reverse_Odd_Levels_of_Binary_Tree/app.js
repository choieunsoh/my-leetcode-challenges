// 2415. Reverse Odd Levels of Binary Tree
// https://leetcode.com/problems/reverse-odd-levels-of-binary-tree/description/
const { toLevelOrderArray } = require('../../../_utils/tree');
// T.C.: O(n)
// S.C.: O(log n)
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
var reverseOddLevels = function (root) {
  dfs(root.left, root.right, true);
  return root;

  function dfs(leftNode, rightNode, isOddLevel) {
    if (!leftNode && !rightNode) return;

    if (isOddLevel) {
      [leftNode.val, rightNode.val] = [rightNode.val, leftNode.val];
    }

    dfs(leftNode.left, rightNode.right, !isOddLevel);
    dfs(leftNode.right, rightNode.left, !isOddLevel);
  }
};

// [2, 3, 5, 8, 13, 21, 34];
var root = {
  val: 2,
  left: {
    val: 3,
    left: {
      val: 8,
      left: null,
      right: null,
    },
    right: {
      val: 13,
      left: null,
      right: null,
    },
  },
  right: {
    val: 5,
    left: {
      val: 21,
      left: null,
      right: null,
    },
    right: {
      val: 34,
      left: null,
      right: null,
    },
  },
};
// [2, 5, 3, 8, 13, 21, 34];
var expected = {
  val: 2,
  left: {
    val: 5,
    left: {
      val: 8,
      left: null,
      right: null,
    },
    right: {
      val: 13,
      left: null,
      right: null,
    },
  },
  right: {
    val: 3,
    left: {
      val: 21,
      left: null,
      right: null,
    },
    right: {
      val: 34,
      left: null,
      right: null,
    },
  },
};
var result = reverseOddLevels(root);
console.log(toLevelOrderArray(result), JSON.stringify(result) === JSON.stringify(expected));

// [7, 13, 11];
var root = {
  val: 7,
  left: {
    val: 13,
    left: null,
    right: null,
  },
  right: {
    val: 11,
    left: null,
    right: null,
  },
};
// [7, 11, 13];
var expected = {
  val: 7,
  left: {
    val: 11,
    left: null,
    right: null,
  },
  right: {
    val: 13,
    left: null,
    right: null,
  },
};
var result = reverseOddLevels(root);
console.log(toLevelOrderArray(result), JSON.stringify(result) === JSON.stringify(expected));

// [0, 1, 2, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2];
var root = {
  val: 0,
  left: {
    val: 1,
    left: {
      val: 0,
      left: {
        val: 1,
        left: null,
        right: null,
      },
      right: {
        val: 1,
        left: null,
        right: null,
      },
    },
    right: {
      val: 0,
      left: {
        val: 1,
        left: null,
        right: null,
      },
      right: {
        val: 1,
        left: null,
        right: null,
      },
    },
  },
  right: {
    val: 2,
    left: {
      val: 0,
      left: {
        val: 2,
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
      val: 0,
      left: {
        val: 2,
        left: null,
        right: null,
      },
      right: {
        val: 2,
        left: null,
        right: null,
      },
    },
  },
};
// [0, 2, 1, 0, 0, 0, 0, 2, 2, 2, 2, 1, 1, 1, 1];
var expected = {
  val: 0,
  left: {
    val: 2,
    left: {
      val: 0,
      left: {
        val: 2,
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
      val: 0,
      left: {
        val: 2,
        left: null,
        right: null,
      },
      right: {
        val: 2,
        left: null,
        right: null,
      },
    },
  },
  right: {
    val: 1,
    left: {
      val: 0,
      left: {
        val: 1,
        left: null,
        right: null,
      },
      right: {
        val: 1,
        left: null,
        right: null,
      },
    },
    right: {
      val: 0,
      left: {
        val: 1,
        left: null,
        right: null,
      },
      right: {
        val: 1,
        left: null,
        right: null,
      },
    },
  },
};
var result = reverseOddLevels(root);
console.log(toLevelOrderArray(result), JSON.stringify(result) === JSON.stringify(expected));
