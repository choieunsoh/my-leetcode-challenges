// 145. Binary Tree Postorder Traversal
// https://leetcode.com/problems/binary-tree-postorder-traversal/
// T.C.: O(n)
// S.C.: O(1)
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
const { TreeNode, createTree } = require('../../../_utils/tree');
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  const result = [];
  if (root === null) {
    return result;
  }

  // Create a dummy node to simplify edge cases
  const dummyNode = new TreeNode(-1);
  let predecessor = null;
  dummyNode.left = root;
  root = dummyNode;

  while (root) {
    if (root.left === null) {
      // Move to the right child if there's no left child
      root = root.right;
      continue;
    }

    predecessor = root.left;

    // Find the rightmost node in the left subtree or the thread to the current node
    while (predecessor.right && predecessor.right !== root) {
      predecessor = predecessor.right;
    }

    // Create a thread if it doesn't exist
    if (predecessor.right === null) {
      predecessor.right = root;
      root = root.left;
      continue;
    }

    // Process the nodes in the left subtree
    let node = predecessor;
    reverseSubtreeLinks(root.left, predecessor);

    // Add nodes from right to left
    while (node !== root.left) {
      result.push(node.val);
      node = node.right;
    }
    result.push(node.val); // Add root.left value
    reverseSubtreeLinks(predecessor, root.left);
    predecessor.right = null;
    root = root.right;
  }

  return result;

  function reverseSubtreeLinks(startNode, endNode) {
    // If the start and end nodes are the same, no need to reverse
    if (startNode === endNode) return;

    let prev = null;
    let current = startNode;
    let next = null;

    // Reverse the direction of the pointers in the subtree
    while (current != endNode) {
      next = current.right;
      current.right = prev;
      prev = current;
      current = next;
    }
    // Reverse the last node
    current.right = prev;
  }
};

var root = createTree([1, null, 2, null, null, 3]);
var expected = [3, 2, 1];
var result = postorderTraversal(root);
console.log(result, result.join() === expected.join());

var root = createTree([]);
var expected = [];
var result = postorderTraversal(root);
console.log(result, result.join() === expected.join());

var root = createTree([1]);
var expected = [1];
var result = postorderTraversal(root);
console.log(result, result.join() === expected.join());
