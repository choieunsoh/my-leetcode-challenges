// 1644. Lowest Common Ancestor of a Binary Tree II
// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-ii/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  const result = LCA(root, p, q);
  if (result.val === p.val) {
    return findNode(p, q) ? p : null;
  }
  if (result.val === q.val) {
    return findNode(q, p) ? q : null;
  }
  return result;

  function LCA(node, p, q) {
    if (!node || node.val === p.val || node.val === q.val) return node;
    const left = LCA(node.left, p, q);
    const right = LCA(node.right, p, q);
    return left && right ? node : left || right;
  }

  function findNode(node, target) {
    if (!node || !target) return false;
    if (node.val === target.val) return true;
    return findNode(node.left, target) || findNode(node.right, target);
  }
};

/*root = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4],
  p = 5,
  q = 1;*/
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
  p = {
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
  q = {
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
  };
var expected = 3;
var result = lowestCommonAncestor(root, p, q);
console.log(result, result?.val === expected);

/*var root = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4],
  p = 5,
  q = 4;*/
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
  p = {
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
  q = {
    val: 4,
    left: null,
    right: null,
  };
var expected = 5;
var result = lowestCommonAncestor(root, p, q);
console.log(result, result?.val === expected);

/*var root = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4],
  p = 5,
  q = 10;*/
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
  p = {
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
  q = {
    val: 10,
    left: null,
    right: null,
  };
var expected = null;
var result = lowestCommonAncestor(root, p, q);
console.log(result, (result?.val ?? null) === expected);
