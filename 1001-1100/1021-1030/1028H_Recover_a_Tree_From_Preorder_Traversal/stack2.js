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
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {string} traversal
 * @return {TreeNode}
 */
var recoverFromPreorder = function (traversal) {
  const stack = [];
  let index = 0;
  while (index < traversal.length) {
    let depth = 0;
    while (index < traversal.length && traversal[index] === '-') {
      depth++;
      index++;
    }

    let val = '';
    while (index < traversal.length && traversal[index] !== '-') {
      val += traversal[index];
      index++;
    }

    const node = new TreeNode(Number(val));

    while (stack.length > depth) {
      stack.pop();
    }

    if (stack.length > 0) {
      const parent = stack[stack.length - 1];
      if (!parent.left) {
        parent.left = node;
      } else {
        parent.right = node;
      }
    }

    stack.push(node);
  }

  return stack[0];
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
