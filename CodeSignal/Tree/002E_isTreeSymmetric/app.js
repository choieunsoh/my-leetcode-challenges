// isTreeSymmetric
// LC-101. Symmetric Tree
// https://leetcode.com/problems/symmetric-tree/
//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
/**
 * @param {Tree} t
 * @return {boolean}
 */
function isTreeSymmetric(t) {
  if (!t) return true;
  return isSame(t.left, t.right);

  function isSame(left, right) {
    if (!left && !right) return true;
    if (!left || !right) return false;
    if (left.value !== right.value) return false;
    return isSame(left.left, right.right) && isSame(left.right, right.left);
  }
}

var t = {
  value: 1,
  left: {
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
  right: {
    value: 2,
    left: {
      value: 4,
      left: null,
      right: null,
    },
    right: {
      value: 3,
      left: null,
      right: null,
    },
  },
};
var expected = true;
var result = isTreeSymmetric(t);
console.log(result, result === expected);

var t = {
  value: 1,
  left: {
    value: 2,
    left: null,
    right: {
      value: 3,
      left: null,
      right: null,
    },
  },
  right: {
    value: 2,
    left: null,
    right: {
      value: 3,
      left: null,
      right: null,
    },
  },
};
var expected = false;
var result = isTreeSymmetric(t);
console.log(result, result === expected);
