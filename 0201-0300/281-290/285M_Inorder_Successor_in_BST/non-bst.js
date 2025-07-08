// 285. Inorder Successor in BST
// https://leetcode.com/problems/inorder-successor-in-bst/
// T.C.: O(n)
// S.C.: O(n)
const { TreeNode, createTree, inOrder } = require('../../../_utils/tree');
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function (root, p) {
  let previous = null; // State variable to keep track of the previously visited node during inorder traversal
  let inorderSuccessorNode = null; // State variable to store the found inorder successor

  // Case 1: If the node 'p' has a right child, the inorder successor is the leftmost node in its right subtree.
  if (p.right !== null) {
    let leftmost = p.right;
    while (leftmost.left !== null) {
      leftmost = leftmost.left;
    }
    inorderSuccessorNode = leftmost;
  } else {
    // Case 2: If the node 'p' does not have a right child, we need to perform an inorder traversal
    // to find the successor. The successor will be the first node encountered after 'p'
    // in an inorder traversal.
    inorderCase2(root, p);
  }

  /**
   * Helper function for Case 2: Performs an inorder traversal to find the successor.
   * This function is a closure and can access 'previous' and 'inorderSuccessorNode' from the outer scope.
   * @param {TreeNode} node The current node being visited in the traversal.
   * @param {TreeNode} targetP The target node 'p' for which we are finding the successor.
   * @private
   */
  function inorderCase2(node, targetP) {
    // If an inorder successor has already been found, or the current node is null, stop recursion.
    if (node === null || inorderSuccessorNode !== null) {
      return;
    }

    // Recurse on the left side
    inorderCase2(node.left, targetP);

    // If the inorder successor hasn't been found yet, perform the check.
    if (inorderSuccessorNode === null) {
      // Check if the 'previous' node was the target node 'p'. If so, the current 'node' is the inorder successor.
      if (previous?.val === targetP.val) {
        inorderSuccessorNode = node;
        return; // Found the successor, can stop further traversal for this path
      }
      // Update 'previous' to the current node for the next iteration.
      previous = node;
    }

    // Recurse on the right side
    inorderCase2(node.right, targetP);
  }

  return inorderSuccessorNode;
};

var root = [2, 1, 3],
  p = 1;
var expected = 2;
var result = inorderSuccessor(createTree(root), createTree([p]));
console.log(result, (result?.val ?? null) === expected);

var root = [5, 3, 6, 2, 4, null, null, 1],
  p = 6;
var expected = null;
var result = inorderSuccessor(createTree(root), createTree([p]));
console.log(result, (result?.val ?? null) === expected);
