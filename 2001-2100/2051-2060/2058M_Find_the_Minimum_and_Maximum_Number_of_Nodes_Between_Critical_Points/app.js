// 2058. Find the Minimum and Maximum Number of Nodes Between Critical Points
// https://leetcode.com/problems/find-the-minimum-and-maximum-number-of-nodes-between-critical-points/
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
 * @return {number[]}
 */
var nodesBetweenCriticalPoints = function (head) {
  let prev = head;
  let curr = head.next;
  let index = 1;
  let first = 0;
  let last = 1;
  let min = Number.MAX_SAFE_INTEGER;
  while (curr.next) {
    const next = curr.next;
    if ((curr.val > prev.val && curr.val > next.val) || (curr.val < prev.val && curr.val < next.val)) {
      if (first === 0) first = index;
      if (last !== index) min = Math.min(min, index - last);
      last = index;
    }
    prev = curr;
    curr = next;
    index++;
  }

  if (min === Number.MAX_SAFE_INTEGER) return [-1, -1];
  return [min, last - first];
};

var head = [3, 1];
var expected = [-1, -1];
var result = nodesBetweenCriticalPoints(createList(head));
console.log(result, result.join() === expected.join());

var head = [5, 3, 1, 2, 5, 1, 2];
var expected = [1, 3];
var result = nodesBetweenCriticalPoints(createList(head));
console.log(result, result.join() === expected.join());

var head = [1, 3, 2, 2, 3, 2, 2, 2, 7];
var expected = [3, 3];
var result = nodesBetweenCriticalPoints(createList(head));
console.log(result, result.join() === expected.join());

var head = [6, 8, 4, 1, 9, 6, 6, 10, 6];
var expected = [1, 6];
var result = nodesBetweenCriticalPoints(createList(head));
console.log(result, result.join() === expected.join());
