// 2641. Cousins in Binary Tree II
// https://leetcode.com/problems/cousins-in-binary-tree-ii/description/
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
 * @return {TreeNode}
 */
var replaceValueInTree = function (root) {
  const levelSums = [];
  calcLevelSum(root, 0);
  replaceSum(root, 0, 0);
  return root;

  function calcLevelSum(root, level) {
    if (!root) return;

    if (levelSums[level] === undefined) {
      levelSums[level] = 0;
    }

    levelSums[level] += root.val;
    calcLevelSum(root.left, level + 1);
    calcLevelSum(root.right, level + 1);
  }

  function replaceSum(root, siblingVal, level) {
    if (!root) return;

    const leftVal = root.left?.val ?? 0;
    const rightVal = root.right?.val ?? 0;

    if (level < 2) {
      root.val = 0;
    } else {
      root.val = levelSums[level] - (root.val + siblingVal);
    }

    replaceSum(root.left, rightVal, level + 1);
    replaceSum(root.right, leftVal, level + 1);
  }
};

// [5,4,9,1,10,null,7]
var root = {
  val: 5,
  left: {
    val: 4,
    left: {
      val: 1,
      left: null,
      right: null,
    },
    right: {
      val: 10,
      left: null,
      right: null,
    },
  },
  right: {
    val: 9,
    left: null,
    right: {
      val: 7,
      left: null,
      right: null,
    },
  },
};
// [0,0,0,7,7,null,11]
var expected = {
  val: 0,
  left: {
    val: 0,
    left: {
      val: 7,
      left: null,
      right: null,
    },
    right: {
      val: 7,
      left: null,
      right: null,
    },
  },
  right: {
    val: 0,
    left: null,
    right: {
      val: 11,
      left: null,
      right: null,
    },
  },
};
var result = replaceValueInTree(root);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

// [3,1,2]
var root = {
  val: 3,
  left: {
    val: 1,
    left: null,
    right: null,
  },
  right: {
    val: 2,
    left: null,
    right: null,
  },
};
// [0,0,0]
var expected = {
  val: 0,
  left: {
    val: 0,
    left: null,
    right: null,
  },
  right: {
    val: 0,
    left: null,
    right: null,
  },
};
var result = replaceValueInTree(root);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));
