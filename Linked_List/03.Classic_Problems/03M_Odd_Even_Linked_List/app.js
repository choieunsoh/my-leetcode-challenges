// https://leetcode.com/problems/odd-even-linked-list/
// 328. Odd Even Linked List
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
 * @return {ListNode}
 */
var oddEvenList = function (head) {
  if (!head) return null;
  let odd = head;
  let even = head.next;
  let evenHead = even;
  while (even && even.next) {
    odd.next = odd.next.next;
    even.next = even.next.next;
    odd = odd.next;
    even = even.next;
  }
  odd.next = evenHead;
  return head;
};

var head = [1, 2, 3, 4, 5];
var expected = [1, 3, 5, 2, 4];
var result = toArray(oddEvenList(createList(head)));
console.log(result, result.join() === expected.join());

var head = [2, 1, 3, 5, 6, 4, 7];
var expected = [2, 3, 6, 7, 1, 5, 4];
var result = toArray(oddEvenList(createList(head)));
console.log(result, result.join() === expected.join());
