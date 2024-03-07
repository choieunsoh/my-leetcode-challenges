// 876. Middle of The Linked List
// https://leetcode.com/problems/middle-of-the-linked-list/
// T.C.: O(n)
// S.C.: O(1)
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

var middleNode = function (head: ListNode | null): ListNode | null {
  let fast = head;
  let slow = head;
  while (fast && fast.next && slow) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

var head = createList([1, 2, 3, 4, 5]);
var expected = [3, 4, 5];
var result = toArray(middleNode(head));
console.log(result, result.join() === expected.join());

var head = createList([1, 2, 3, 4, 5, 6]);
var expected = [4, 5, 6];
var result = toArray(middleNode(head));
console.log(result, result.join() === expected.join());
