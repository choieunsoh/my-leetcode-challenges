// 148. Sort List
// https://leetcode.com/problems/sort-list/
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
var sortList = function (head) {
  if (!head || !head.next) return head;
  const mid = getMidNode(head);
  const left = sortList(head);
  const right = sortList(mid);
  return mergeNode(left, right);

  function mergeNode(left, right) {
    const dummy = new ListNode();
    let current = dummy;
    while (left && right) {
      if (left.val < right.val) {
        current.next = left;
        left = left.next;
      } else {
        current.next = right;
        right = right.next;
      }
      current = current.next;
    }
    current.next = left ? left : right;
    return dummy.next;
  }

  function getMidNode(node) {
    let prevMid = null;
    let slow = node;
    let fast = node;
    while (slow && fast && fast.next) {
      prevMid = prevMid ? prevMid.next : node;
      slow = slow.next;
      fast = fast.next.next;
    }
    prevMid.next = null;
    return slow;
  }
};

var head = [4, 2, 1, 3];
var expected = [1, 2, 3, 4];
var result = toArray(sortList(createList(head)));
console.log(result, result.join() === expected.join());

var head = [-1, 5, 3, 4, 0];
var expected = [-1, 0, 3, 4, 5];
var result = toArray(sortList(createList(head)));
console.log(result, result.join() === expected.join());

var head = [];
var expected = [];
var result = toArray(sortList(createList(head)));
console.log(result, result.join() === expected.join());
