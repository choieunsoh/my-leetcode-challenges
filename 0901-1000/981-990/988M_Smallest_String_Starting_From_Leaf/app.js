// 988. Smallest String Starting From Leaf
// https://leetcode.com/problems/smallest-string-starting-from-leaf/description/
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
 * @return {string}
 */
var smallestFromLeaf = function (root) {
  return dfs(root, '');

  function dfs(node, str) {
    if (!node) return '';

    const newStr = toString(node.val) + str;
    if (!node.left && !node.right) return newStr;
    const leftStr = dfs(node.left, newStr);
    const rightStr = dfs(node.right, newStr);

    if (leftStr === '') return rightStr;
    if (rightStr === '') return leftStr;
    return leftStr < rightStr ? leftStr : rightStr;
  }

  function toString(val) {
    return String.fromCharCode(val + 'a'.charCodeAt(0));
  }
};

// [0, 1, 2, 3, 4, 3, 4];
var root = {
  val: 0,
  left: {
    val: 1,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: {
      val: 4,
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
      val: 4,
      left: null,
      right: null,
    },
  },
};
var expected = 'dba';
var result = smallestFromLeaf(root);
console.log(result, result === expected);

// [25, 1, 3, 1, 3, 0, 2];
var root = {
  val: 25,
  left: {
    val: 1,
    left: {
      val: 1,
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
    val: 3,
    left: {
      val: 0,
      left: null,
      right: null,
    },
    right: {
      val: 2,
      left: null,
      right: null,
    },
  },
};
var expected = 'adz';
var result = smallestFromLeaf(root);
console.log(result, result === expected);

// [2, 2, 1, null, 1, 0, null, 0];
var root = {
  val: 2,
  left: {
    val: 2,
    left: null,
    right: {
      val: 1,
      left: {
        val: 0,
        left: null,
        right: null,
      },
      right: null,
    },
  },
  right: {
    val: 1,
    left: {
      val: 0,
      left: null,
      right: null,
    },
    right: null,
  },
};
var expected = 'abc';
var result = smallestFromLeaf(root);
console.log(result, result === expected);

// [25];
var root = {
  val: 25,
  left: null,
  right: null,
};
var expected = 'z';
var result = smallestFromLeaf(root);
console.log(result, result === expected);

// [0, null, 1];
var root = {
  val: 0,
  left: null,
  right: {
    val: 1,
    left: null,
    right: null,
  },
};
var expected = 'ba';
var result = smallestFromLeaf(root);
console.log(result, result === expected);
