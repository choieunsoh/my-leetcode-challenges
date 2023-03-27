// kthSmallestInBST
// LC-230. Kth Smallest Element in a BST
// https://leetcode.com/problems/kth-smallest-element-in-a-bst/
//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
/**
 * @param {Tree} t
 * @param {number} k
 * @return {number}
 */
function kthSmallestInBST(t, k) {
  let result = [];
  dfs(t);
  return result[k - 1];

  function dfs(root) {
    if (!root) return;
    dfs(root.left);
    if (result.length >= k) return;
    result.push(root.value);
    dfs(root.right);
  }
}

var t = {
    value: 3,
    left: {
      value: 1,
      left: null,
      right: null,
    },
    right: {
      value: 5,
      left: {
        value: 4,
        left: null,
        right: null,
      },
      right: {
        value: 6,
        left: null,
        right: null,
      },
    },
  },
  k = 4;
var expected = 5;
var result = kthSmallestInBST(t, k);
console.log(result, result === expected);

var t = {
    value: 1,
    left: {
      value: -1,
      left: {
        value: -2,
        left: null,
        right: null,
      },
      right: {
        value: 0,
        left: null,
        right: null,
      },
    },
    right: null,
  },
  k = 1;
var expected = -2;
var result = kthSmallestInBST(t, k);
console.log(result, result === expected);
