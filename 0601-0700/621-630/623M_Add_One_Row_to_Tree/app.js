// 623. Add One Row to Tree
// https://leetcode.com/problems/add-one-row-to-tree/description/
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
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function (root, val, depth) {
  if (depth === 1) {
    return new TreeNode(val, root);
  }
  return dfs(root, 1);

  function dfs(node, currDepth) {
    if (currDepth === depth - 1) {
      node.left = new TreeNode(val, node.left, null);
      node.right = new TreeNode(val, null, node.right);
      return node;
    }
    if (node.left) dfs(node.left, currDepth + 1);
    if (node.right) dfs(node.right, currDepth + 1);
    return node;
  }
};

// [4, 2, 6, 3, 1, 5],
var root = {
    val: 4,
    left: {
      val: 2,
      left: {
        val: 3,
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
      val: 6,
      left: {
        val: 5,
        left: null,
        right: null,
      },
      right: null,
    },
  },
  val = 1,
  depth = 2;
// [4, 1, 1, 2, null, null, 6, 3, 1, 5];
var expected = {
  val: 4,
  left: {
    val: 1,
    left: {
      val: 2,
      left: {
        val: 3,
        left: null,
        right: null,
      },
      right: {
        val: 1,
        left: null,
        right: null,
      },
    },
    right: null,
  },
  right: {
    val: 1,
    left: null,
    right: {
      val: 6,
      left: {
        val: 5,
        left: null,
        right: null,
      },
      right: null,
    },
  },
};
var result = addOneRow(root, val, depth);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

// [4, 2, null, 3, 1],
var root = {
    val: 4,
    left: {
      val: 2,
      left: {
        val: 3,
        left: null,
        right: null,
      },
      right: {
        val: 1,
        left: null,
        right: null,
      },
    },
    right: null,
  },
  val = 1,
  depth = 3;
// [4, 2, null, 1, 1, 3, null, null, 1];
var expected = {
  val: 4,
  left: {
    val: 2,
    left: {
      val: 1,
      left: {
        val: 3,
        left: null,
        right: null,
      },
      right: null,
    },
    right: {
      val: 1,
      left: null,
      right: {
        val: 1,
        left: null,
        right: null,
      },
    },
  },
  right: null,
};
var result = addOneRow(root, val, depth);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

// [1]
var root = {
    val: 1,
    left: null,
    right: null,
  },
  val = 2,
  depth = 1;
// [2, 1]
var expected = {
  val: 2,
  left: {
    val: 1,
    left: null,
    right: null,
  },
  right: null,
};
var result = addOneRow(root, val, depth);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

// [1]
var root = {
    val: 1,
    left: null,
    right: null,
  },
  val = 2,
  depth = 2;
// [1, 2, 2]
var expected = {
  val: 1,
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
};
var result = addOneRow(root, val, depth);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

// [1, 2, 2]
var root = {
    val: 1,
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
  val = 3,
  depth = 3;
// [1, 2, 2, 3, 3, 3, 3]
var expected = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
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
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: {
      val: 3,
      left: null,
      right: null,
    },
  },
};
var result = addOneRow(root, val, depth);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));
