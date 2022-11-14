// 92. Reverse Linked List II
// https://leetcode.com/problems/reverse-linked-list-ii/
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  if (!head) return head;

  let prev = null;
  let curr = head;
  let start = null;
  let tail = null;

  for (let i = 1; i <= right; i++) {
    if (i === left - 1) {
      start = curr;
    } else if (i === left) {
      tail = curr;
    }
    if (i >= left) {
      const next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    } else {
      prev = curr;
      curr = curr.next;
    }
  }

  if (start) {
    start.next = prev;
  } else {
    head = prev;
  }

  tail.next = curr;
  return head;
};

var head = createList([1, 2, 3, 4, 5]),
  left = 2,
  right = 4;
var expected = [1, 4, 3, 2, 5];
var result = toArray(reverseBetween(head, left, right));
console.log(result, result.join() === expected.join());

var head = createList([5]),
  left = 1,
  right = 1;
var expected = [5];
var result = toArray(reverseBetween(head, left, right));
console.log(result, result.join() === expected.join());
