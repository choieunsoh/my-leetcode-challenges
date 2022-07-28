// https://leetcode.com/problems/linked-list-cycle-ii/
// 142. Linked List Cycle II
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
 * @return {ListNode}
 */
var detectCycle = function (head) {
  let slow = head;
  let fast = head;
  let cycle = null;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      cycle = slow;
      break;
    }
  }

  if (cycle === null) return null;

  while (cycle !== head) {
    cycle = cycle.next;
    head = head.next;
  }

  return head;
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

var expected = 2;
var actual = detectCycle(head);
console.log(actual, (actual?.val ?? -1) === expected);
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

var expected = 1;
var actual = detectCycle(head);
console.log(actual, (actual?.val ?? -1) === expected);
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

var expected = -1;
var actual = detectCycle(head);
console.log(actual, (actual?.val ?? -1) === expected);
