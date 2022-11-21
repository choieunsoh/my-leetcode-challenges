// 61. Rotate List
// https://leetcode.com/problems/rotate-list/
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

var rotateRight = function (head: ListNode | null, k: number): ListNode | null {
  if (!head || k === 0) return head;

  let curr = head;
  let count = 0;
  let oldLast: ListNode | null = null;
  while (curr) {
    if (!curr.next) {
      oldLast = curr;
    }
    curr = curr.next;
    count++;
  }
  k = k % count;
  if (k === 0) return head;

  const breakIndex = count - k - 1;

  let index = 0;
  curr = head;
  while (curr && index < breakIndex) {
    curr = curr.next;
    index++;
  }

  const newLast = curr;
  const newFirst = curr?.next;

  if (oldLast) oldLast.next = head;
  if (newLast) newLast.next = null;

  return newFirst;
};

var head = [1, 2, 3, 4, 5],
  k = 2;
var expected = [4, 5, 1, 2, 3];
var result = toArray(rotateRight(createList(head), k));
console.log(result, result.join() === expected.join());

var head = [0, 1, 2],
  k = 4;
var expected = [2, 0, 1];
var result = toArray(rotateRight(createList(head), k));
console.log(result, result.join() === expected.join());
