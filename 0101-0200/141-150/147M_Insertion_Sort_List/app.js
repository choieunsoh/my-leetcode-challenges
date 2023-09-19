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
  const dummy = new ListNode();
  let curr = head;
  while (curr) {
    let prev = dummy;
    while (prev.next?.val <= curr.val) {
      prev = prev.next;
    }

    const next = curr.next;
    curr.next = prev.next;
    prev.next = curr;
    curr = next;
  }
  return dummy.next;
};

var head = [4, 2, 1, 3];
var expected = [1, 2, 3, 4];
var result = toArray(insertionSortList(createList(head)));
console.log(result, result.join() === expected.join());

var head = [-1, 5, 3, 4, 0];
var expected = [-1, 0, 3, 4, 5];
var result = toArray(insertionSortList(createList(head)));
console.log(result, result.join() === expected.join());
