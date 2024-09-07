// 1367. Linked List in Binary Tree
// https://leetcode.com/problems/linked-list-in-binary-tree/
// T.C.: O(n + m)
// S.C.: O(n + m)
// Knuth-Morris-Pratt (KMP) Algorithm
const { TreeNode, buildTree } = require('../../../_utils/lc-tree-node');
const { ListNode, createList } = require('../../../_utils/list');
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSubPath = function (head, root) {
  // Build the pattern and prefix table from the linked list
  let patternIndex = 0;
  const pattern = [head.val];
  const prefixTable = [patternIndex];
  head = head.next;

  while (head) {
    while (patternIndex > 0 && head.val !== pattern[patternIndex]) {
      patternIndex = prefixTable[patternIndex - 1];
    }
    patternIndex += head.val === pattern[patternIndex] ? 1 : 0;
    pattern.push(head.val);
    prefixTable.push(patternIndex);
    head = head.next;
  }

  // Perform DFS to search for the pattern in the tree
  return searchInTree(root, 0, pattern, prefixTable);

  function searchInTree(node, patternIndex, pattern, prefixTable) {
    if (!node) return false;

    while (patternIndex > 0 && node.val !== pattern[patternIndex]) {
      patternIndex = prefixTable[patternIndex - 1];
    }
    patternIndex += node.val === pattern[patternIndex] ? 1 : 0;

    // Check if the pattern is fully matched
    if (patternIndex === pattern.length) return true;

    // Recursively search left and right subtrees
    return (
      searchInTree(node.left, patternIndex, pattern, prefixTable) ||
      searchInTree(node.right, patternIndex, pattern, prefixTable)
    );
  }
};

var head = createList([4, 2, 8]),
  root = buildTree([1, 4, 4, null, 2, 2, null, 1, null, 6, 8, null, null, null, null, 1, 3]);
var expected = true;
var result = isSubPath(head, root);
console.log(result, result === expected);

var head = createList([1, 4, 2, 6]),
  root = buildTree([1, 4, 4, null, 2, 2, null, 1, null, 6, 8, null, null, null, null, 1, 3]);
var expected = true;
var result = isSubPath(head, root);
console.log(result, result === expected);

var head = createList([1, 4, 2, 6, 8]),
  root = buildTree([1, 4, 4, null, 2, 2, null, 1, null, 6, 8, null, null, null, null, 1, 3]);
var expected = false;
var result = isSubPath(head, root);
console.log(result, result === expected);
