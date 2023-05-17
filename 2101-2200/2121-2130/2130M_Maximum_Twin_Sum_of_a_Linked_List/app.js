// 2130. Maximum Twin Sum of a Linked List
// https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/
const { ListNode, createList } = require('../../../_utils/list');
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
  let result = Number.MIN_SAFE_INTEGER;
  let prev = null;
  let fast = head;
  let slow = head;
  while (fast?.next) {
    prev = slow;
    fast = fast.next.next;
    slow = slow.next;
  }

  prev.next = null;
  fast = reverse(slow);
  slow = head;

  while (slow && fast) {
    result = Math.max(result, slow.val + fast.val);
    slow = slow.next;
    fast = fast.next;
  }

  return result;

  function reverse(head) {
    let prev = null;
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

var head = [5, 4, 2, 1];
var expected = 6;
var result = pairSum(createList(head));
console.log(result, result === expected);

var head = [4, 2, 2, 3];
var expected = 7;
var result = pairSum(createList(head));
console.log(result, result === expected);

var head = [1, 100000];
var expected = 100001;
var result = pairSum(createList(head));
console.log(result, result === expected);
