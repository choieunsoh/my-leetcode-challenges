// 876. Middle of The Linked List
// https://leetcode.com/problems/middle-of-the-linked-list/
// T.C.: O(n)
// S.C.: O(1)
const { LinkedList, createList, toArray } = require('../../../_utils/list');
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
var middleNode = function (head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
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
