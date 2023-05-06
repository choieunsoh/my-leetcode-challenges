// 86. Partition List
// https://leetcode.com/problems/partition-list/
const { ListNode, createList, toArray } = require('../../../_utils/list');
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} curr
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  const leftHead = new ListNode(0);
  let left = leftHead;
  const rightHead = new ListNode(0);
  let right = rightHead;
  let curr = head;
  while (curr) {
    if (curr.val < x) {
      left.next = curr;
      left = left.next;
    } else {
      right.next = curr;
      right = right.next;
    }
    curr = curr.next;
  }
  right.next = null;
  left.next = rightHead.next;
  return leftHead.next;
};

var head = [1, 4, 3, 2, 5, 2],
  x = 3;
var expected = [1, 2, 2, 4, 3, 5];
var result = toArray(partition(createList(head), x));
console.log(result, result.join() === expected.join());

var head = [2, 1],
  x = 2;
var expected = [1, 2];
var result = toArray(partition(createList(head), x));
console.log(result, result.join() === expected.join());
