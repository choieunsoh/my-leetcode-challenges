// https://leetcode.com/problems/rotate-list/
// 61. Rotate List
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head || k === 0) return head;

  let curr = head;
  let index = 0;
  while (curr && curr.next) {
    curr = curr.next;
    index++;
  }
  index++;
  k = k % index;
  if (k === 0) return head;

  const oldFirst = head;
  const oldLast = curr;
  oldLast.next = oldFirst;

  const breakIndex = index - k - 1;
  index = 0;
  curr = head;
  while (index < breakIndex && curr && curr.next) {
    curr = curr.next;
    index++;
  }

  const newLast = curr;
  const newFirst = newLast.next;
  head = newFirst;
  newLast.next = null;

  return head;
};

var head = [1, 2, 3, 4, 5],
  k = 2;
var expected = [4, 5, 1, 2, 3];
var result = toArray(rotateRight(createList(head), k));
console.log(result, result.join() === expected.join());

var head = [0, 1, 2],
  k = 4;
var expected = [2, 0, 1];
var result = toArray(rotateRight(createList(head), k));
console.log(result, result.join() === expected.join());
