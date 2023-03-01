// 1367. Linked List in Binary Tree
// https://leetcode.com/problems/linked-list-in-binary-tree/
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
  function dfsTree(head, root) {
    if (!root) return false;
    if (dfsList(head, root)) return true;
    if (dfsTree(head, root.left)) return true;
    if (dfsTree(head, root.right)) return true;
    return false;
  }
  function dfsList(head, root) {
    if (!head) return true;
    if (!root || head.val !== root.val) return false;
    if (dfsList(head.next, root.left)) return true;
    if (dfsList(head.next, root.right)) return true;
    return false;
  }

  return dfsTree(head, root);
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
