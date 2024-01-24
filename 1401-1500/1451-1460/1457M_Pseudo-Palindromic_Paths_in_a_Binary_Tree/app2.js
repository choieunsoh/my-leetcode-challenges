// 1457. Pseudo-Palindromic Paths in a Binary Tree
// https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/description/
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
 * @return {number}
 */
var pseudoPalindromicPaths = function (root) {
  let result = 0;
  dfs(root, new Array(10).fill(0));
  return result;

  function dfs(root, counts) {
    if (!root) return;

    counts[root.val]++;
    if (!root.left && !root.right) {
      const valid = isPseudoPalindromic(counts);
      if (valid) result++;
    }

    dfs(root.left, counts);
    dfs(root.right, counts);
    counts[root.val]--;
  }

  function isPseudoPalindromic(counts) {
    let countOdd = 0;
    for (const count of counts) {
      if (count % 2 === 1) countOdd++;
      if (countOdd > 1) return false;
    }
    return true;
  }
};

var root = [2, 3, 1, 3, 1, null, 1];
var root = {
  val: 2,
  left: {
    val: 3,
    left: {
      val: 3,
    },
    right: {
      val: 1,
    },
  },
  right: {
    val: 1,
    right: {
      val: 1,
    },
  },
};
var expected = 2;
var result = pseudoPalindromicPaths(root);
console.log(result, result === expected);

var root = [2, 1, 1, 1, 3, null, null, null, null, null, 1];
var root = {
  val: 2,
  left: {
    val: 1,
    left: {
      val: 1,
    },
    right: {
      val: 3,
      right: {
        val: 1,
      },
    },
  },
  right: {
    val: 1,
  },
};
var expected = 1;
var result = pseudoPalindromicPaths(root);
console.log(result, result === expected);

var root = [9];
var root = {
  val: 9,
};
var expected = 1;
var result = pseudoPalindromicPaths(root);
console.log(result, result === expected);

var root = [8, 6, 9, null, null, null, 4, 4, 1, 5, 4, null, null, null, null, 8];
var root = {
  val: 8,
  left: {
    val: 6,
  },
  right: {
    val: 9,
    right: {
      val: 4,
      left: {
        val: 4,
        left: {
          val: 5,
        },
        right: {
          val: 4,
          left: {
            val: 8,
          },
        },
      },
      right: {
        val: 1,
      },
    },
  },
};
var expected = 0;
var result = pseudoPalindromicPaths(root);
console.log(result, result === expected);
