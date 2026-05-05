// https://leetcode.com/problems/rotate-list/
// 61. Rotate List
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  // base cases
  if (head == null) return null;
  if (head.next == null) return head;

  // close the linked list into the ring
  let old_tail = head;
  let n;
  for (n = 1; old_tail.next != null; n++) {
    old_tail = old_tail.next;
  }
  old_tail.next = head;

  // find new tail : (n - k % n - 1)th node
  // and new head : (n - k % n)th node
  let new_tail = head;
  for (let i = 0; i < n - (k % n) - 1; i++) {
    new_tail = new_tail.next;
  }

  let new_head = new_tail.next;
  // break the ring
  new_tail.next = null;
  return new_head;
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
