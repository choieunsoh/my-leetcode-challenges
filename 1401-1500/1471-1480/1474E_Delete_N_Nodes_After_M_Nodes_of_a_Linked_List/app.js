// 1474. Delete N Nodes After M Nodes of a Linked List
// https://leetcode.com/problems/delete-n-nodes-after-m-nodes-of-a-linked-list/
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var deleteNodes = function (head, m, n) {
  let index = 0;
  let curr = head;
  let prev = null;
  while (curr) {
    index++;
    if (index <= m) {
      prev = curr;
    } else if (index === m + n) {
      prev.next = curr.next;
      index = 0;
    }
    curr = curr.next;
  }
  if (prev) prev.next = null;
  return head;
};

var head = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
  m = 2,
  n = 3;
var expected = [1, 2, 6, 7, 11, 12];
var result = toArray(deleteNodes(createList(head), m, n));
console.log(result, result.join() === expected.join());

var head = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  m = 1,
  n = 3;
var expected = [1, 5, 9];
var result = toArray(deleteNodes(createList(head), m, n));
console.log(result, result.join() === expected.join());

var head = [6, 3, 5, 6, 2, 8, 9, 2, 3, 4],
  m = 2,
  n = 1;
var expected = [6, 3, 6, 2, 9, 2, 4];
var result = toArray(deleteNodes(createList(head), m, n));
console.log(result, result.join() === expected.join());
