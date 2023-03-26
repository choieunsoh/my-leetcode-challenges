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
function hasPathWithGivenSum(t, s) {
  if (!t) return false;
  if (t.value === s && !t.left && !t.right) return true;
  const leftPath = hasPathWithGivenSum(t.left, s - t.value);
  const rightPath = hasPathWithGivenSum(t.right, s - t.value);
  return leftPath || rightPath;
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
