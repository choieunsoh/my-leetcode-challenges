// restoreBinaryTree
// LC-105. Construct Binary Tree from Preorder and Inorder Traversal
// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
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
function restoreBinaryTree(inorder, preorder) {
  const map = new Map();
  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }
  let index = 0;
  return createTree(0, preorder.length - 1);

  function createTree(left, right) {
    if (left > right) return null;
    const value = preorder[index++];
    const root = new Tree(value);
    const mid = map.get(value);
    root.left = createTree(left, mid - 1);
    root.right = createTree(mid + 1, right);
    return root;
  }
}

var inorder = [4, 2, 1, 5, 3, 6],
  preorder = [1, 2, 4, 3, 5, 6];
var expected = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4,
      left: null,
      right: null,
    },
    right: null,
  },
  right: {
    value: 3,
    left: {
      value: 5,
      left: null,
      right: null,
    },
    right: {
      value: 6,
      left: null,
      right: null,
    },
  },
};
var result = restoreBinaryTree(inorder, preorder);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));
