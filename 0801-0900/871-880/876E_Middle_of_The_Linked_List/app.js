// https://leetcode.com/problems/middle-of-the-linked-list/
// 876. Middle of The Linked List
const { LinkedList, createList, toArray } = require('../../../_utils/list');
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
var middleNode = function (head) {
  const size = (head) => {
    let count = 0;
    while (head) {
      count++;
      head = head.next;
    }
    return count;
  };
  const N = size(head);
  const mid = Math.floor(N / 2) + 1;

  if (mid === 1) {
    return head;
  } else {
    let index = 1;
    while (head && index < mid) {
      index++;
      head = head.next;
    }
    return head;
  }
};

var head = createList([1, 2, 3, 4, 5]);
var expected = [3, 4, 5];
var result = toArray(middleNode(head));
console.log(result, result.join() === expected.join());

var head = createList([1, 2, 3, 4, 5, 6]);
var expected = [4, 5, 6];
var result = toArray(middleNode(head));
console.log(result, result.join() === expected.join());
