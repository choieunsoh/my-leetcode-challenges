// https://leetcode.com/problems/linked-list-cycle-ii/
// 142. Linked List Cycle II
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

var detectCycle = function (head: ListNode | null): ListNode | null {
  let slow = head;
  let fast = head;
  while (slow && fast?.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast === slow) {
      break;
    }
  }

  if (!slow) return null;
  while (slow !== head) {
    slow = slow?.next;
    head = head?.next;
  }

  return head;
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
var expected = nums[pos];
var result = detectCycle(head);
console.log(result, (result?.val ?? -1) === expected);

var nums = [1, 2],
  pos = 0;
var head = createLinkedList(nums, pos);
var expected = nums[pos];
var result = detectCycle(head);
console.log(result, (result?.val ?? -1) === expected);

var nums = [1],
  pos = -1;
var head = createLinkedList(nums, pos);
var expected = -1;
var result = detectCycle(head);
console.log(result, (result?.val ?? -1) === expected);
