// https://leetcode.com/problems/remove-linked-list-elements/
// 203. Remove Linked List Elements
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  if (!head) return null;
  let curr = head;
  let prev = new ListNode(0, head);
  while (curr) {
    if (curr.val === val) {
      prev.next = curr.next;
      if (curr === head) head = head.next;
    } else {
      prev.next = curr;
      prev = curr;
    }
    curr = curr.next;
  }
  return head;
};

var head = [1, 2, 6, 3, 4, 5, 6],
  val = 6;
var expected = [1, 2, 3, 4, 5];
var result = toArray(removeElements(createList(head), val));
console.log(result, result.join() === expected.join());

var head = [],
  val = 1;
var expected = [];
var result = toArray(removeElements(createList(head), val));
console.log(result, result.join() === expected.join());

var head = [7, 7, 7, 7],
  val = 7;
var expected = [];
var result = toArray(removeElements(createList(head), val));
console.log(result, result.join() === expected.join());
