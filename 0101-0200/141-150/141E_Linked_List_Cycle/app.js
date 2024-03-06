// 141. Linked List Cycle
// https://leetcode.com/problems/linked-list-cycle/
// T.C.: O(n)
// S.C.: O(1)
const { ListNode, createList } = require('../../../_utils/list');
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
};

var head = [3, 2, 0, -4],
  pos = 1;
var size = head.length;
var head = createList(head);
var tail = head;
while (tail.next) {
  tail = tail.next;
}
var node = head;
for (let i = 0; i < size; i++) {
  if (i === pos) {
    tail.next = node;
    break;
  }
  node = node.next;
}

var expected = true;
var actual = hasCycle(head);
console.log(head, tail, actual, actual === expected);
/******************************************* */
var head = [1, 2],
  pos = 0;
var size = head.length;
var head = createList(head);
var tail = head;
while (tail.next) {
  tail = tail.next;
}
var node = head;
for (let i = 0; i < size; i++) {
  if (i === pos) {
    tail.next = node;
    break;
  }
  node = node.next;
}

var expected = true;
var actual = hasCycle(head);
console.log(head, tail, actual, actual === expected);
/******************************************* */
var head = [1],
  pos = -1;
var size = head.length;
var head = createList(head);
var tail = head;
while (tail.next) {
  tail = tail.next;
}
var node = head;
for (let i = 0; i < size; i++) {
  if (i === pos) {
    tail.next = node;
    break;
  }
  node = node.next;
}

var expected = false;
var actual = hasCycle(head);
console.log(head, tail, actual, actual === expected);
