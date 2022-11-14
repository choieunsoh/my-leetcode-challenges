// 206. Reverse Linked List
// https://leetcode.com/problems/reverse-linked-list/
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

var reverseList = function (head: ListNode | null): ListNode | null {
  if (!head) return head;
  let prev: ListNode | null = null;
  let curr = head;
  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};

var head = createList([1, 2, 3, 4, 5]);
var expected = [5, 4, 3, 2, 1];
var result = toArray(reverseList(head));
console.log(result, result.join() === expected.join());

var head = createList([1, 2]);
var expected = [2, 1];
var result = toArray(reverseList(head));
console.log(result, result.join() === expected.join());

var head = createList([]);
var expected: number[] = [];
var result = toArray(reverseList(head));
console.log(result, result.join() === expected.join());
