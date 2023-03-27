// isSubtree
// LC-572. Subtree of Another Tree
// https://leetcode.com/problems/subtree-of-another-tree/
//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
/**
 * @param {Tree} t1
 * @param {Tree} t2
 * @return {boolean}
 */
function isSubtree(t1, t2) {
  if (!t2) return true;
  if (!t1) return false;
  if (dfs(t1, t2)) return true;

  return isSubtree(t1.left, t2) || isSubtree(t1.right, t2);

  function dfs(t1, t2) {
    if (!t1 && !t2) return true;
    if (!t1 || !t2) return false;
    if (t1.value !== t2.value) return false;

    const left = dfs(t1.left, t2.left);
    const right = dfs(t1.right, t2.right);
    return left && right;
  }
}

var t1 = {
    value: 5,
    left: {
      value: 10,
      left: {
        value: 4,
        left: {
          value: 1,
          left: null,
          right: null,
        },
        right: {
          value: 2,
          left: null,
          right: null,
        },
      },
      right: {
        value: 6,
        left: null,
        right: {
          value: -1,
          left: null,
          right: null,
        },
      },
    },
    right: {
      value: 7,
      left: null,
      right: null,
    },
  },
  t2 = {
    value: 10,
    left: {
      value: 4,
      left: {
        value: 1,
        left: null,
        right: null,
      },
      right: {
        value: 2,
        left: null,
        right: null,
      },
    },
    right: {
      value: 6,
      left: null,
      right: {
        value: -1,
        left: null,
        right: null,
      },
    },
  };
var expected = true;
var result = isSubtree(t1, t2);
console.log(result, result === expected);

var t1 = {
    value: 5,
    left: {
      value: 10,
      left: {
        value: 4,
        left: {
          value: 1,
          left: null,
          right: null,
        },
        right: {
          value: 2,
          left: null,
          right: null,
        },
      },
      right: {
        value: 6,
        left: {
          value: -1,
          left: null,
          right: null,
        },
        right: null,
      },
    },
    right: {
      value: 7,
      left: null,
      right: null,
    },
  },
  t2 = {
    value: 10,
    left: {
      value: 4,
      left: {
        value: 1,
        left: null,
        right: null,
      },
      right: {
        value: 2,
        left: null,
        right: null,
      },
    },
    right: {
      value: 6,
      left: null,
      right: {
        value: -1,
        left: null,
        right: null,
      },
    },
  };
var expected = false;
var result = isSubtree(t1, t2);
console.log(result, result === expected);
