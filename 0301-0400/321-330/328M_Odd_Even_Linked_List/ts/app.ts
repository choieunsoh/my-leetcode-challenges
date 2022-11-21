// 328. Odd Even Linked List
// https://leetcode.com/problems/odd-even-linked-list/
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { createList, ListNode, toArray } from '../../../../_utils/list';
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

var oddEvenList = function (head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;

  let odd = head;
  let even = head.next;
  const evenHead = even;
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
