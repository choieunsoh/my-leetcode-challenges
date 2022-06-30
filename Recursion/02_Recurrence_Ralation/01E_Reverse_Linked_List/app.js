// https://leetcode.com/problems/reverse-linked-list/
// 206. Reverse Linked List
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
var reverseList = function (head) {
  let prev = null;
  let curr = head;
  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
};

var head = createList([1, 2, 3, 4, 5]);
var expected = [5, 4, 3, 2, 1];
var result = toArray(reverseList(head));
console.log(result, result.join() === expected.join());

var head = createList([1, 2]);
var expected = [2, 1];
var result = toArray(reverseList(head));
console.log(result, result.join() === expected.join());

var head = createList([]);
var expected = [];
var result = toArray(reverseList(head));
console.log(result, result.join() === expected.join());
