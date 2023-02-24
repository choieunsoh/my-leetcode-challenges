// 1290. Convert Binary Number in a Linked List to Integer
// https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/
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
 * @return {number}
 */
var getDecimalValue = function (head) {
  let value = 0;
  while (head) {
    value = (value << 1) | head.val;
    head = head.next;
  }
  return value;
};

var head = createList([1, 0, 1]);
var expected = 5;
var result = getDecimalValue(head);
console.log(result, result === expected);

var head = createList([0]);
var expected = 0;
var result = getDecimalValue(head);
console.log(result, result === expected);

var head = createList([1, 0, 0, 0]);
var expected = 8;
var result = getDecimalValue(head);
console.log(result, result === expected);
