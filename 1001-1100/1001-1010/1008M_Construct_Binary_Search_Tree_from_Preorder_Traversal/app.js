// 1008. Construct Binary Search Tree from Preorder Traversal
// https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/description/
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
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function (preorder) {
  const n = preorder.length;
  let index = 0;
  return createNode(-Infinity, Infinity);

  function createNode(left, right) {
    if (index === n) return null;

    const val = preorder[index];
    if (val < left || val > right) return null;

    index++;
    const node = new TreeNode(val);
    node.left = createNode(left, val);
    node.right = createNode(val, right);
    return node;
  }
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var preorder = [8, 5, 1, 7, 10, 12];
// [8, 5, 10, 1, 7, null, 12];
var expected = {
  val: 8,
  left: {
    val: 5,
    left: {
      val: 1,
      left: null,
      right: null,
    },
    right: {
      val: 7,
      left: null,
      right: null,
    },
  },
  right: {
    val: 10,
    left: null,
    right: {
      val: 12,
      left: null,
      right: null,
    },
  },
};
var result = bstFromPreorder(preorder);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

var preorder = [1, 3];
// [1, null, 3];
var expected = {
  val: 1,
  left: null,
  right: {
    val: 3,
    left: null,
    right: null,
  },
};
var result = bstFromPreorder(preorder);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));
