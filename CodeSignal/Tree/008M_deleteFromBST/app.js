// deleteFromBST
// LC-450. Delete Node in a BST
// https://leetcode.com/problems/delete-node-in-a-bst/
//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function Tree(x) {
  this.value = x;
  this.left = null;
  this.right = null;
}
/**
 * @param {number[]} inorder
 * @param {number[]} preorder
 * @return {Tree}
 */
//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function deleteFromBST(t, queries) {
  for (const value of queries) {
    t = deleteNode(t, value);
  }
  return t;

  function deleteNode(root, value) {
    if (!root) return null;
    if (value < root.value) {
      root.left = deleteNode(root.left, value);
      return root;
    }
    if (value > root.value) {
      root.right = deleteNode(root.right, value);
      return root;
    }

    if (!root.left) return root.right;

    root.value = getRightmost(root.left).value;
    root.left = removeRightmost(root.left);
    return root;
  }

  function getRightmost(root) {
    if (!root) return null;
    while (root.right) {
      root = root.right;
    }
    return root;
  }

  function removeRightmost(root) {
    if (!root) return null;

    if (!root.right) return root.left;
    root.right = removeRightmost(root.right);
    return root;
  }
}
/*
      5
  2       6
1   3         8
            7
*/

var t = {
    value: 5,
    left: {
      value: 2,
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
    right: {
      value: 6,
      left: null,
      right: {
        value: 8,
        left: {
          value: 7,
          left: null,
          right: null,
        },
        right: null,
      },
    },
  },
  queries = [4, 5, 6];
var expected = {
  value: 3,
  left: {
    value: 2,
    left: {
      value: 1,
      left: null,
      right: null,
    },
    right: null,
  },
  right: {
    value: 8,
    left: {
      value: 7,
      left: null,
      right: null,
    },
    right: null,
  },
};
var result = deleteFromBST(t, queries);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));
