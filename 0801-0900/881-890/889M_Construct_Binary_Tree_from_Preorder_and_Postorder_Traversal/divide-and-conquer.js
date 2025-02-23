// 889. Construct Binary Tree from Preorder and Postorder Traversal
// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/description/
// T.C.: O(n^2)
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
  const numOfNodes = preorder.length;
  return constructTree(0, numOfNodes - 1, 0);

  function constructTree(preStart, preEnd, postStart) {
    if (preStart > preEnd) return null;

    if (preStart === preEnd) {
      return new TreeNode(preorder[preStart]);
    }

    const leftRoot = preorder[preStart + 1];
    let numOfNodesInLeft = 1;
    while (postorder[postStart + numOfNodesInLeft - 1] !== leftRoot) {
      numOfNodesInLeft++;
    }

    const root = new TreeNode(preorder[preStart]);
    root.left = constructTree(preStart + 1, preStart + numOfNodesInLeft, postStart);
    root.right = constructTree(preStart + numOfNodesInLeft + 1, preEnd, postStart + numOfNodesInLeft);
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
