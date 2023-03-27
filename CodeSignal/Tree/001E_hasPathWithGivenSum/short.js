// hasPathWithGivenSum
// LC-112: Path Sum
// https://leetcode.com/problems/path-sum/
//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
/**
 * @param {Tree} t
 * @param {number} s
 * @return {boolean}
 */
function hasPathWithGivenSum(t, s) {
  if (!t) return s === 0;
  s -= t.value;
  return hasPathWithGivenSum(t.left, s) || hasPathWithGivenSum(t.right, s);
}

var t = {
    value: 4,
    left: {
      value: 1,
      left: {
        value: -2,
        left: null,
        right: {
          value: 3,
          left: null,
          right: null,
        },
      },
      right: null,
    },
    right: {
      value: 3,
      left: {
        value: 1,
        left: null,
        right: null,
      },
      right: {
        value: 2,
        left: {
          value: -2,
          left: null,
          right: null,
        },
        right: {
          value: -3,
          left: null,
          right: null,
        },
      },
    },
  },
  s = 7;
var expected = true;
var result = hasPathWithGivenSum(t, s);
console.log(result, result === expected);

var t = {
    value: 4,
    left: {
      value: 1,
      left: {
        value: -2,
        left: null,
        right: {
          value: 3,
          left: null,
          right: null,
        },
      },
      right: null,
    },
    right: {
      value: 3,
      left: {
        value: 1,
        left: null,
        right: null,
      },
      right: {
        value: 2,
        left: {
          value: -4,
          left: null,
          right: null,
        },
        right: {
          value: -3,
          left: null,
          right: null,
        },
      },
    },
  },
  s = 7;
var expected = false;
var result = hasPathWithGivenSum(t, s);
console.log(result, result === expected);
