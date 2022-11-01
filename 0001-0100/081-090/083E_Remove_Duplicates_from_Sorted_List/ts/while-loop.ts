// https://leetcode.com/problems/remove-duplicates-from-sorted-list/
// 83. Remove Duplicates from Sorted List
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

var deleteDuplicates = function (head: ListNode | null): ListNode | null {
  let curr = head;
  while (curr?.next) {
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return head;
};

var head = [1, 1, 2];
var expected = [1, 2];
var result = toArray(deleteDuplicates(createList(head)));
console.log(result, result.join() === expected.join());

var head = [1, 1, 2, 3, 3];
var expected = [1, 2, 3];
var result = toArray(deleteDuplicates(createList(head)));
console.log(result, result.join() === expected.join());
