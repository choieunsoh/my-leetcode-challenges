/**
 * @typedef {Object} TreeNode
 * @property {number} value
 * @property {TreeNode} left
 * @property {TreeNode} right
 */
/**
 *
 * @param {TreeNode} root
 * @returns {number}
 */
function treeDiameter(root) {
  const leftDepth = getDepth(root.left);
  const rightDepth = getDepth(root.right);
  return leftDepth + rightDepth + 1;

  function getDepth(root) {
    if (!root) return 0;

    const leftDepth = getDepth(root.left);
    const rightDepth = getDepth(root.right);
    return Math.max(leftDepth, rightDepth) + 1;
  }
}

var root = {
  value: 0,
  left: {
    value: 1,
    left: null,
    right: {
      value: 2,
      left: {
        value: 3,
        left: null,
        right: null,
      },
      right: {
        value: 4,
        left: null,
        right: null,
      },
    },
  },
  right: {
    value: 5,
    left: {
      value: 6,
      left: null,
      right: null,
    },
    right: null,
  },
};
var expected = 6;
var result = treeDiameter(root);
console.log(result, result === expected);

var root = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4,
    },
  },
  right: {
    value: 3,
  },
};
var expected = 4;
var result = treeDiameter(root);
console.log(result, result === expected);

var root = {
  value: 0,
  left: {
    value: 1,
    left: null,
    right: {
      value: 2,
      left: {
        value: 3,
        left: null,
        right: null,
      },
      right: {
        value: 4,
        left: null,
        right: null,
      },
    },
  },
  right: {
    value: 5,
    left: {
      value: 6,
      left: null,
      right: null,
    },
    right: {
      value: 0,
      left: {
        value: 1,
        left: null,
        right: {
          value: 2,
          left: {
            value: 3,
            left: null,
            right: null,
          },
          right: {
            value: 4,
            left: null,
            right: null,
          },
        },
      },
      right: {
        value: 5,
        left: {
          value: 6,
          left: null,
          right: null,
        },
        right: null,
      },
    },
  },
};
var expected = 9;
var result = treeDiameter(root);
console.log(result, result === expected);
