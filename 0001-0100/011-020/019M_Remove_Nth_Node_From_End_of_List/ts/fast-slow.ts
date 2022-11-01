// https://leetcode.com/problems/remove-nth-node-from-end-of-list/
// 19. Remove Nth Node From End of List
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ListNode, createList, toArray } from '../../../../_utils/list';
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

var removeNthFromEnd = function (
  head: ListNode | null,
  n: number
): ListNode | null {
  const dummy = new ListNode(0, head);
  let slow = dummy;
  let fast = dummy;
  for (let i = 0; i <= n; i++) {
    fast = fast?.next;
  }
  while (fast && slow) {
    slow = slow.next;
    fast = fast.next;
  }
  if (slow) slow.next = slow.next.next;
  return dummy.next;
};

var head = [1, 2, 3, 4, 5],
  n = 2;
var expected = [1, 2, 3, 5];
var actual = removeNthFromEnd(createList(head), n);
console.log(toArray(actual), toArray(actual).join() === expected.join());

var head = [1],
  n = 1;
var expected: number[] = [];
var actual = removeNthFromEnd(createList(head), n);
console.log(toArray(actual), toArray(actual).join() === expected.join());

var head = [1, 2],
  n = 1;
var expected = [1];
var actual = removeNthFromEnd(createList(head), n);
console.log(toArray(actual), toArray(actual).join() === expected.join());
