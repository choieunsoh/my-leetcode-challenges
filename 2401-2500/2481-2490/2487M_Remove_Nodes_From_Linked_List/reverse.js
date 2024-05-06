// 2487. Remove Nodes From Linked List
// https://leetcode.com/problems/remove-nodes-from-linked-list/
// T.C.: O(n)
// S.C.: O(1)
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
var removeNodes = function (head) {
  head = reverse(head);

  let curr = head;
  let maxVal = -Infinity;
  while (curr) {
    maxVal = Math.max(maxVal, curr.val);
    // P C N
    // 8 3 13 2 5
    if (curr.val < maxVal) {
      if (prev !== null) {
        prev.next = curr.next;
      } else {
        head = curr.next;
      }
      const deleted = curr;
      curr = curr.next;
      deleted.next = null;
    } else {
      prev = curr;
      curr = curr.next;
    }
  }

  return reverse(head);

  function reverse(head) {
    let prev = null;
    let curr = head;
    while (curr) {
      const next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return prev;
  }
};

var head = [5, 2, 13, 3, 8];
var expected = [13, 8];
var result = toArray(removeNodes(createList(head)));
console.log(result, result.join() === expected.join());

var head = [1, 1, 1, 1];
var expected = [1, 1, 1, 1];
var result = toArray(removeNodes(createList(head)));
console.log(result, result.join() === expected.join());
