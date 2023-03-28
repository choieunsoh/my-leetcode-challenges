// digitTreeSum
// LC-129. Sum Root to Leaf Numbers
// https://leetcode.com/problems/sum-root-to-leaf-numbers/
//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
/**
 * @param {Tree} t
 * @return {number}
 */
function digitTreeSum(t) {
  if (!t) return 0;
  let result = 0;
  dfs(t, 0);
  return result;

  function dfs(root, sum) {
    if (!root) return sum;
    if (!root.left && !root.right) {
      sum = sum * 10 + root.value;
      result += sum;
      return;
    }
    if (root.left) dfs(root.left, 10 * sum + root.value);
    if (root.right) dfs(root.right, 10 * sum + root.value);
  }
}

var t = {
  value: 1,
  left: {
    value: 0,
    left: {
      value: 3,
      left: null,
      right: null,
    },
    right: {
      value: 1,
      left: null,
      right: null,
    },
  },
  right: {
    value: 4,
    left: null,
    right: null,
  },
};
var expected = 218;
var result = digitTreeSum(t);
console.log(result, result === expected);

var t = {
  value: 0,
  left: {
    value: 9,
    left: null,
    right: null,
  },
  right: {
    value: 9,
    left: {
      value: 1,
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
var expected = 193;
var result = digitTreeSum(t);
console.log(result, result === expected);
