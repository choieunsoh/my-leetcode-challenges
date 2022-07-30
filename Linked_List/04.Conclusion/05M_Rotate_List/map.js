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

  const map = new Map();
  let curr = head;
  let length = 0;
  while (curr) {
    map.set(length++, curr);
    curr = curr.next;
  }
  k = k % length;
  if (k === 0) return head;

  const oldFirst = head;
  const oldLast = map.get(length - 1);
  oldLast.next = oldFirst;

  const newLast = map.get(length - k - 1);
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
