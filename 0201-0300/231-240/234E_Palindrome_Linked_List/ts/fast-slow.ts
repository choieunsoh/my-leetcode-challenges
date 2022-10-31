// https://leetcode.com/problems/palindrome-linked-list/
// 234. Palindrome Linked List
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

var isPalindrome = function (head: ListNode | null): boolean {
  let fast = head;
  let slow = head;
  while (slow && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  fast = reverse(slow);
  slow = head;
  while (fast && slow) {
    if (fast?.val !== slow?.val) return false;
    slow = slow.next;
    fast = fast.next;
  }

  return true;

  function reverse(head: ListNode | null): ListNode | null {
    let prev: ListNode | null = null;
    let curr = head;
    while (curr) {
      const next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return prev;
  }
};

var head = createList([1, 2, 2, 1]);
var expected = true;
var result = isPalindrome(head);
console.log(result, result === expected);

var head = createList([1, 3]);
var result = isPalindrome(head);
var expected = false;
console.log(result, result === expected);

var head = createList([1, 2, 3]);
var result = isPalindrome(head);
var expected = false;
console.log(result, result === expected);
