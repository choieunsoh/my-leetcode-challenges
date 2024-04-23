// 1666. Change the Root of a Binary Tree
// https://leetcode.com/problems/change-the-root-of-a-binary-tree/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var flipBinaryTree = function (root, leaf) {
  return dfs(leaf, null);

  function dfs(node, newParent) {
    if (!node) return;

    const originalParent = node.parent;
    node.parent = newParent;

    if (!originalParent) return node;

    if (node.left) node.right = node.left;
    if (originalParent.left == node) originalParent.left = null;
    if (originalParent.right == node) originalParent.right = null;

    node.left = dfs(originalParent, node);
    return node;
  }
};

function setParent(node, parent) {
  if (node) node.parent = parent;
  if (node && node.left) setParent(node.left, node);
  if (node && node.right) setParent(node.right, node);
}

// [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4],
var root = {
    val: 3,
    left: {
      val: 5,
      left: {
        val: 6,
        left: null,
        right: null,
      },
      right: {
        val: 2,
        left: {
          val: 7,
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
    right: {
      val: 1,
      left: {
        val: 0,
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
  leaf = { val: 7, left: null, right: null };
setParent(root);
// [7, 2, null, 5, 4, 3, 6, null, null, null, 1, null, null, 0, 8];
var expected = {
  val: 7,
  left: {
    val: 2,
    left: {
      val: 5,
      left: {
        val: 3,
        left: null,
        right: {
          val: 1,
          left: {
            val: 0,
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
        val: 6,
        left: null,
        right: null,
      },
    },
    right: {
      val: 4,
      left: null,
      right: null,
    },
  },
  right: null,
};
var result = flipBinaryTree(root, leaf);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

// [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4],
var root = {
    val: 3,
    left: {
      val: 5,
      left: {
        val: 6,
        left: null,
        right: null,
      },
      right: {
        val: 2,
        left: {
          val: 7,
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
    right: {
      val: 1,
      left: {
        val: 0,
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
  leaf = { val: 0, left: null, right: null };
setParent(root);
// [0, 1, null, 3, 8, 5, null, null, null, 6, 2, null, null, 7, 4];
var expected = {
  val: 0,
  left: {
    val: 1,
    left: {
      val: 3,
      left: {
        val: 5,
        left: {
          val: 6,
          left: null,
          right: null,
        },
        right: {
          val: 2,
          left: {
            val: 7,
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
      right: null,
    },
    right: {
      val: 8,
      left: null,
      right: null,
    },
  },
  right: null,
};
var result = flipBinaryTree(root, leaf);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));
