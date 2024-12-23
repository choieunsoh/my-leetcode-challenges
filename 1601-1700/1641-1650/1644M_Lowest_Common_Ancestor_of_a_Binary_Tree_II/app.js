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
  if (!p || !q) return null;

  let result = null;
  dfs(root);
  return result ?? null;

  function dfs(node) {
    if (!node) return false;
    const left = dfs(node.left) ? 1 : 0;
    const right = dfs(node.right) ? 1 : 0;
    const parent = node.val === q.val || node.val === p.val ? 1 : 0;
    if (left + right + parent === 2) {
      result = node;
    }
    return left + right + parent > 0;
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
