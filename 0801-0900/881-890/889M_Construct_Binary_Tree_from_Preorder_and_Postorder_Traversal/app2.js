// 889. Construct Binary Tree from Preorder and Postorder Traversal
// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/description/
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
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var constructFromPrePost = function (preorder, postorder) {
  let preIndex = 0;
  let postIndex = 0;
  return constructTree();

  function constructTree() {
    // Create a new node with the value at the current preorder index
    const root = new TreeNode(preorder[preIndex++]);

    // Recursively construct the left subtree if the root is not the last of
    // its subtree
    if (root.val !== postorder[postIndex]) {
      root.left = constructTree();
    }

    // Recursively construct the right subtree if the root is still not the
    // last of its subtree
    if (root.val !== postorder[postIndex]) {
      root.right = constructTree();
    }

    // Mark this node and its subtree as fully processed
    postIndex++;
    return root;
  }
};

var preorder = [1, 2, 4, 5, 3, 6, 7],
  postorder = [4, 5, 2, 6, 7, 3, 1];
// [1, 2, 3, 4, 5, 6, 7];
var expected = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 5,
      left: null,
      right: null,
    },
  },
  right: {
    val: 3,
    left: {
      val: 6,
      left: null,
      right: null,
    },
    right: {
      val: 7,
      left: null,
      right: null,
    },
  },
};
var result = constructFromPrePost(preorder, postorder);
console.log(JSON.stringify(result, null, 2), JSON.stringify(result) === JSON.stringify(expected));

var preorder = [1],
  postorder = [1];
// [1];
var expected = {
  val: 1,
  left: null,
  right: null,
};
var result = constructFromPrePost(preorder, postorder);
console.log(JSON.stringify(result, null, 2), JSON.stringify(result) === JSON.stringify(expected));
