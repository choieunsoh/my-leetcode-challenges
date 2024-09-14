// 1676. Lowest Common Ancestor of a Binary Tree IV
// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iv/description/
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
 * @param {TreeNode[]} nodes
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, nodes) {
  const eulerPath = [];
  const firstOccurrence = new Map();
  buildEulerPath(root, 0);

  let startIndex = Number.MAX_SAFE_INTEGER;
  let endIndex = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < nodes.length; i++) {
    const nodeValue = nodes[i].val;
    if (firstOccurrence.has(nodeValue)) {
      startIndex = Math.min(firstOccurrence.get(nodeValue), startIndex);
      endIndex = Math.max(firstOccurrence.get(nodeValue), endIndex);
    }
  }

  let lcaIndex = -1;
  let lcaValue = -1;
  let minDepth = Number.MAX_SAFE_INTEGER;
  for (let index = startIndex; index <= endIndex; index++) {
    const [val, depth] = eulerPath[index];
    if (depth < minDepth) {
      minDepth = depth;
      lcaIndex = index;
      lcaValue = val;
    }
  }
  return { val: lcaValue, left: null, right: null };

  function buildEulerPath(root, depth) {
    if (!root) return;

    eulerPath.push([root.val, depth]);
    if (!firstOccurrence.has(root.val)) {
      firstOccurrence.set(root.val, eulerPath.length - 1);
    }

    if (root.left) {
      buildEulerPath(root.left, depth + 1);
      eulerPath.push([root.val, depth]);
    }
    if (root.right) {
      buildEulerPath(root.right, depth + 1);
      eulerPath.push([root.val, depth]);
    }
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
