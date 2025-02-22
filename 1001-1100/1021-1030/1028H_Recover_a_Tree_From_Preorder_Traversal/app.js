// 1028. Recover a Tree From Preorder Traversal
// https://leetcode.com/problems/recover-a-tree-from-preorder-traversal/description/
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
 * @param {string} traversal
 * @return {TreeNode}
 */
var recoverFromPreorder = function (traversal) {
  let currIndex = 0;
  return dfs(0);

  function dfs(depth) {
    if (currIndex >= traversal.length) return null;

    let dashCount = 0;
    while (currIndex + dashCount < traversal.length && traversal[currIndex + dashCount] === '-') {
      dashCount++;
    }

    if (dashCount !== depth) return null;

    currIndex += dashCount;

    let val = '';
    while (currIndex < traversal.length && traversal[currIndex] !== '-') {
      val += traversal[currIndex];
      currIndex++;
    }

    return {
      val: Number(val),
      left: dfs(depth + 1),
      right: dfs(depth + 1),
    };
  }
};

var traversal = '1-2--3--4-5--6--7';
// [1, 2, 5, 3, 4, 6, 7];
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
      val: 4,
      left: null,
      right: null,
    },
  },
  right: {
    val: 5,
    left: {
      val: 6,
      left: null,
      right: null,
    },
    right: {
      val: 7,
      left: null,
      right: null,
    },
  },
};
var result = recoverFromPreorder(traversal);
console.log(JSON.stringify(result, null, 2), JSON.stringify(result) === JSON.stringify(expected));

var traversal = '1-2--3---4-5--6---7';
// [1, 2, 5, 3, null, 6, null, 4, null, 7];
var expected = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
      left: {
        val: 4,
        left: null,
        right: null,
      },
      right: null,
    },
    right: null,
  },
  right: {
    val: 5,
    left: {
      val: 6,
      left: {
        val: 7,
        left: null,
        right: null,
      },
      right: null,
    },
    right: null,
  },
};
var result = recoverFromPreorder(traversal);
console.log(JSON.stringify(result, null, 2), JSON.stringify(result) === JSON.stringify(expected));

var traversal = '1-401--349---90--88';
// [1, 401, null, 349, 88, 90];
var expected = {
  val: 1,
  left: {
    val: 401,
    left: {
      val: 349,
      left: {
        val: 90,
        left: null,
        right: null,
      },
      right: null,
    },
    right: {
      val: 88,
      left: null,
      right: null,
    },
  },
  right: null,
};
var result = recoverFromPreorder(traversal);
console.log(JSON.stringify(result, null, 2), JSON.stringify(result) === JSON.stringify(expected));
