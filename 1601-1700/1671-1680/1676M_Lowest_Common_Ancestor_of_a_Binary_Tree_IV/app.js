// 1676. Lowest Common Ancestor of a Binary Tree IV
// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iv/description/
// T.C.: O(m * n)
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
 * @param {TreeNode[]} nodes
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, nodes) {
  const nodeValues = nodes.map((node) => node.val);
  return dfs(root);

  function dfs(root) {
    if (!root) return null;
    if (nodeValues.includes(root.val)) return root;

    const left = dfs(root.left);
    const right = dfs(root.right);
    if (left && right) return root;
    return left ?? right;
  }
};

// Input: root = [3,5,1,6,2,0,8,null,null,7,4], nodes = [4,7]
// Output: 2
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
  nodes = [
    {
      val: 4,
      left: null,
      right: null,
    },
    {
      val: 7,
      left: null,
      right: null,
    },
  ];
var expected = {
  val: 2,
  left: null,
  right: null,
};
var result = lowestCommonAncestor(root, nodes);
console.log(result, result?.val === expected.val);

// Input: root = [3,5,1,6,2,0,8,null,null,7,4], nodes = [1]
// Output: 1
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
  nodes = [
    {
      val: 1,
      left: null,
      right: null,
    },
  ];
var expected = {
  val: 1,
  left: null,
  right: null,
};
var result = lowestCommonAncestor(root, nodes);
console.log(result, result?.val === expected.val);

// Input: root = [3,5,1,6,2,0,8,null,null,7,4], nodes = [7,6,2,4]
// Output: 5
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
  nodes = [
    {
      val: 7,
      left: null,
      right: null,
    },
    {
      val: 6,
      left: null,
      right: null,
    },
    {
      val: 2,
      left: null,
      right: null,
    },
    {
      val: 4,
      left: null,
      right: null,
    },
  ];
var expected = {
  val: 5,
  left: null,
  right: null,
};
var result = lowestCommonAncestor(root, nodes);
console.log(result, result?.val === expected.val);
