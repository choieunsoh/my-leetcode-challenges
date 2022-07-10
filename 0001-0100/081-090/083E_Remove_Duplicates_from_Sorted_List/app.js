// https://leetcode.com/problems/remove-duplicates-from-sorted-list/
// 83. Remove Duplicates from Sorted List
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
var deleteDuplicates = function (head) {
  let node = head;
  if (!node) return null;

  while (node.next) {
    if (node.val === node.next.val) {
      const next = node.next.next;
      node.next = next;
    } else {
      node = node.next;
    }
  }
  return head;
};

var head = [1, 1, 2];
var expected = [1, 2];
var result = deleteDuplicates(createList(head));
console.log(toArray(result), expected);

var head = [1, 1, 2, 3, 3];
var expected = [1, 2, 3];
var result = deleteDuplicates(createList(head));
console.log(toArray(result), expected);
