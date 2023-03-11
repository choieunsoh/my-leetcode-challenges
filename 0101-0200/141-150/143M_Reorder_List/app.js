// 143. Reorder List
// https://leetcode.com/problems/reorder-list/
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  let slow = head;
  let fast = head;
  while (slow && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  const tail = reverseList(slow.next);
  slow.next = null;

  mergeList(head, tail);

  function reverseList(node) {
    let prev = null;
    let curr = node;
    while (curr) {
      const next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return prev;
  }

  function mergeList(l1, l2) {
    while (l2) {
      // Store
      const l1Next = l1.next;
      const l2Next = l2.next;
      // Connect
      l1.next = l2;
      l2.next = l1Next;
      // Move Next
      l1 = l1Next;
      l2 = l2Next;
    }
  }
};

var head = createList([1, 2, 3, 4]);
var expected = [1, 4, 2, 3];
reorderList(head);
var result = toArray(head);
console.log(result, result.join() === expected.join());

var head = createList([1, 2, 3, 4, 5]);
var expected = [1, 5, 2, 4, 3];
reorderList(head);
var result = toArray(head);
console.log(result, result.join() === expected.join());

var head = createList([1, 2, 3, 4, 5, 6]);
var expected = [1, 6, 2, 5, 3, 4];
reorderList(head);
var result = toArray(head);
console.log(result, result.join() === expected.join());
