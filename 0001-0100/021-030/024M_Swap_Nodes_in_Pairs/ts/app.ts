// 24. Swap Nodes in Pairs
// https://leetcode.com/problems/swap-nodes-in-pairs/
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

var swapPairs = function (head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;

  const dummy = new ListNode(0);
  dummy.next = head;
  let curr = dummy;

  while (curr && curr.next && curr.next.next) {
    const leftNode = curr.next;
    const rightNode = curr.next.next;

    leftNode.next = rightNode.next;
    rightNode.next = leftNode;
    curr.next = rightNode;
    curr = leftNode;
  }

  return dummy.next;
};

var head = createList([1, 2, 3, 4]);
var expected = [2, 1, 4, 3];
var result = swapPairs(head);
console.log(toArray(result), toArray(result).join() === expected.join());

var head = createList([1, 2, 3, 4, 5]);
var expected = [2, 1, 4, 3, 5];
var result = swapPairs(head);
console.log(toArray(result), toArray(result).join() === expected.join());

var head = createList([]);
var expected: number[] = [];
var result = swapPairs(head);
console.log(toArray(result), toArray(result).join() === expected.join());

var head = createList([1]);
var expected = [1];
var result = swapPairs(head);
console.log(toArray(result), toArray(result).join() === expected.join());
