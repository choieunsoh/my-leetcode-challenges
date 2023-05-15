// 1721. Swapping Nodes in a Linked List
// https://leetcode.com/problems/swapping-nodes-in-a-linked-list/
const { ListNode, createList, toArray } = require('../../../_utils/list');
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function (head, k) {
  let current = head;
  let second = head;
  let first = head;
  for (let i = 0; i < k - 1; i++) {
    current = current.next;
  }
  first = current;

  while (current.next) {
    current = current.next;
    second = second.next;
  }

  [first.val, second.val] = [second.val, first.val];
  return head;
};

var head = [1, 2, 3, 4, 5],
  k = 2;
var expected = [1, 4, 3, 2, 5];
var result = toArray(swapNodes(createList(head), k));
console.log(result, result.join() === expected.join());

var head = [7, 9, 6, 6, 7, 8, 3, 0, 9, 5],
  k = 5;
var expected = [7, 9, 6, 6, 8, 7, 3, 0, 9, 5];
var result = toArray(swapNodes(createList(head), k));
console.log(result, result.join() === expected.join());
