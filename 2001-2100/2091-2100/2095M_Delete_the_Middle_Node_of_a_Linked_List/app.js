// 2095. Delete the Middle Node of a Linked List
// https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/
// T.C.: O(n)
// S.C.: O(1)
const { ListNode, createList, toArray } = require('../../../_utils/list');
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function (head) {
  if (!head.next) return null;
  let slow = head;
  let fast = head;
  let prev = null;
  while (fast?.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  prev.next = slow.next;
  return head;
};

var head = [1, 3, 4, 7, 1, 2, 6];
var expected = [1, 3, 4, 1, 2, 6];
var result = toArray(deleteMiddle(createList(head)));
console.log(result, result.join() === expected.join());

var head = [1, 2, 3, 4];
var expected = [1, 2, 4];
var result = toArray(deleteMiddle(createList(head)));
console.log(result, result.join() === expected.join());

var head = [2, 1];
var expected = [2];
var result = toArray(deleteMiddle(createList(head)));
console.log(result, result.join() === expected.join());

var head = [1];
var expected = [];
var result = toArray(deleteMiddle(createList(head)));
console.log(result, result.join() === expected.join());
