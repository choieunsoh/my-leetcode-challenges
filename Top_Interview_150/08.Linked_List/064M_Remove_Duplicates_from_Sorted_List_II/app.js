// 82. Remove Duplicates from Sorted List II
// https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/?envType=study-plan&id=algorithm-ii
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
  let dummy = new ListNode(0, head);
  let prev = dummy;
  while (head) {
    if (head.next && head.val === head.next.val) {
      while (head.next && head.val === head.next.val) {
        head = head.next;
      }
      prev.next = head.next;
    } else {
      prev = prev.next;
    }
    head = head.next;
  }
  return dummy.next;
};

var head = createList([1, 2, 3, 3, 4, 4, 5]);
var expected = [1, 2, 5];
var result = toArray(deleteDuplicates(head));
console.log(result, result.join() === expected.join());

var head = createList([1, 1, 1, 2, 3]);
var expected = [2, 3];
var result = toArray(deleteDuplicates(head));
console.log(result, result.join() === expected.join());
