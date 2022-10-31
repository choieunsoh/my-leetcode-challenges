// 141. Linked List Cycle
// https://leetcode.com/problems/linked-list-cycle/
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ListNode, createList } from '../../../../_utils/list';
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

var hasCycle = function (head: ListNode | null): boolean {
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    slow = slow?.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
};

function createLinkedList(nums: number[], pos: number): ListNode | null {
  var size = nums.length;
  var head = createList(nums);
  var tail = head;
  while (tail?.next) {
    tail = tail.next;
  }
  var node = head;
  for (let i = 0; i < size; i++) {
    if (i === pos && tail) {
      tail.next = node;
      break;
    }
    node = node?.next;
  }
  return head;
}

var nums = [3, 2, 0, -4],
  pos = 1;
var head = createLinkedList(nums, pos);
var expected = true;
var result = hasCycle(head);
console.log(result, result === expected);

var nums = [1, 2],
  pos = 0;
var head = createLinkedList(nums, pos);
var expected = true;
var result = hasCycle(head);
console.log(result, result === expected);

var nums = [1],
  pos = -1;
var head = createLinkedList(nums, pos);
var expected = false;
var result = hasCycle(head);
console.log(result, result === expected);
