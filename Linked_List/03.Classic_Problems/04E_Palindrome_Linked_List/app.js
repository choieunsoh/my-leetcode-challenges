// https://leetcode.com/problems/palindrome-linked-list/
// 234. Palindrome Linked List
const {
  ListNode,
  createList,
  printList,
  reverseList,
} = require('../../../_utils/list');
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let a = head;
  let bHead = reverseList(slow.next);
  let b = bHead;

  let result = true;
  while (a && b) {
    if (a.val !== b.val) {
      result = false;
      break;
    }
    a = a.next;
    b = b.next;
  }

  reverseList(bHead);

  return result;
};
var isPalindrome1 = function (head) {
  let left = head;
  let right = head;
  right = reverseList(right);

  while (left && right) {
    if (left.val !== right.val) return false;

    left = left.next;
    right = right.next;
  }

  return true;
};

var head = createList([1, 2, 2, 1]);
printList(head);
console.log(isPalindrome(head));

var head = createList([1, 2, 3]);
printList(head);
console.log(isPalindrome(head));
