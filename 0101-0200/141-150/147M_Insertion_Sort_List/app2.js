// 147. Insertion Sort List
// https://leetcode.com/problems/insertion-sort-list/
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
var insertionSortList = function (head) {
  const dummy = new ListNode(0, head);
  let curr = head.next;
  head.next = null;
  while (curr) {
    const next = curr.next;
    let prev = dummy;

    while (prev.next?.val > curr.val) {
      prev = prev.next;
    }

    curr.next = prev.next;
    prev.next = curr;
    curr = next;
  }

  curr = dummy.next;
  head = null;
  while (curr) {
    const next = curr.next;
    curr.next = head;
    head = curr;
    curr = next;
  }

  return head;
};

var head = [4, 2, 1, 3];
var expected = [1, 2, 3, 4];
var result = toArray(insertionSortList(createList(head)));
console.log(result, result.join() === expected.join());

var head = [-1, 5, 3, 4, 0];
var expected = [-1, 0, 3, 4, 5];
var result = toArray(insertionSortList(createList(head)));
console.log(result, result.join() === expected.join());
