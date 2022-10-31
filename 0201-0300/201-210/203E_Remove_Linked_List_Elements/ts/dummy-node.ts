// https://leetcode.com/problems/remove-linked-list-elements/
// 203. Remove Linked List Elements
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

var removeElements = function (
  head: ListNode | null,
  val: number
): ListNode | null {
  let temp = new ListNode(0, head);
  let prev = temp;
  let curr = head;
  while (curr) {
    if (curr.val === val) {
      prev.next = curr.next;
    } else {
      prev = curr;
    }
    curr = curr.next;
  }
  return temp.next;
};

var head = [1, 2, 6, 3, 4, 5, 6],
  val = 6;
var expected = [1, 2, 3, 4, 5];
var result = toArray(removeElements(createList(head), val));
console.log(result, result.join() === expected.join());

var head: number[] = [],
  val = 1;
var expected: number[] = [];
var result = toArray(removeElements(createList(head), val));
console.log(result, result.join() === expected.join());

var head = [7, 7, 7, 7],
  val = 7;
var expected: number[] = [];
var result = toArray(removeElements(createList(head), val));
console.log(result, result.join() === expected.join());
