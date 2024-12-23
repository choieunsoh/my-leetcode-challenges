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
  const parentMap = new Map();
  let pNode = findNode(root, null, p);
  let qNode = findNode(root, null, q);
  if (pNode === null || qNode === null) return null;

  const pPath = [];
  while (pNode) {
    pPath.push(pNode);
    pNode = parentMap.get(pNode);
  }

  const qPath = [];
  while (qNode) {
    qPath.push(qNode);
    qNode = parentMap.get(qNode);
  }

  let pIndex = pPath.length - 1;
  let qIndex = qPath.length - 1;
  while (pPath[pIndex] === qPath[qIndex]) {
    pIndex -= 1;
    qIndex -= 1;
  }

  return parentMap.get(pPath[pIndex] ?? qPath[qIndex]);

  function findNode(node, parent, target) {
    if (!node || !target) return null;

    parentMap.set(node, parent);
    if (node.val === target.val) return node;

    const left = findNode(node.left, node, target);
    if (left) return left;
    return findNode(node.right, node, target);
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
    left: null,
    right: null,
  },
  q = {
    val: 1,
    left: null,
    right: null,
  };
var expected = 3;
var result = lowestCommonAncestor(root, p, q);
console.log(result, result.val === expected);

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
    left: null,
    right: null,
  },
  q = {
    val: 4,
    left: null,
    right: null,
  };
var expected = 5;
var result = lowestCommonAncestor(root, p, q);
console.log(result, result.val === expected);

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
    left: null,
    right: null,
  },
  q = {
    val: 10,
    left: null,
    right: null,
  };
var expected = null;
var result = lowestCommonAncestor(root, p, q);
console.log(result, (result?.val ?? null) === expected);
