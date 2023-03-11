// 109. Convert Sorted List to Binary Search Tree
// https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/
const { ListNode, createList } = require('../../../_utils/list');
const { TreeNode, createTree, levelOrder } = require('../../../_utils/tree');
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
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  if (!head) return null;
  const mid = findRoot(head);
  const root = new TreeNode(mid.val);
  if (head === mid) return root;

  root.left = sortedListToBST(head);
  root.right = sortedListToBST(mid.next);
  return root;

  function findRoot(head) {
    if (!head) return null;
    let slow = head;
    let fast = head;
    let prev = null;
    while (fast?.next) {
      prev = slow;
      slow = slow.next;
      fast = fast.next.next;
    }
    if (prev) prev.next = null;
    return slow;
  }
};

var head = createList([-10, -3, 0, 5, 9]);
var expected = levelOrder(createTree([0, -3, 9, -10, null, 5]));
var result = levelOrder(sortedListToBST(head));
console.log(result, result.join() === expected.join());

var head = createList([]);
var expected = levelOrder(createTree([]));
var result = levelOrder(sortedListToBST(head));
console.log(result, result.join() === expected.join());
