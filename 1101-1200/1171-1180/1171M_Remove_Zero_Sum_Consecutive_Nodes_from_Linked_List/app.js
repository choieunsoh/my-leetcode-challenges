// 1171. Remove Zero Sum Consecutive Nodes from Linked List
// https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/
// T.C.: O(n)
// S.C.: O(n)
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
var removeZeroSumSublists = function (head) {
  const temp = new ListNode(0, head);
  const map = new Map();
  let curr = temp;
  let sum = 0;
  while (curr) {
    sum += curr.val;
    map.set(sum, curr);
    curr = curr.next;
  }

  curr = temp;
  sum = 0;
  while (curr) {
    sum += curr.val;
    curr.next = map.get(sum).next;
    curr = curr.next;
  }
  return temp.next;
};

var head = [1, 2, -3, 3, 1];
var expected = [3, 1];
var result = toArray(removeZeroSumSublists(createList(head)));
console.log(result, result.join() === expected.join());

var head = [1, 2, 3, -3, 4];
var expected = [1, 2, 4];
var result = toArray(removeZeroSumSublists(createList(head)));
console.log(result, result.join() === expected.join());

var head = [1, 2, 3, -3, -2];
var expected = [1];
var result = toArray(removeZeroSumSublists(createList(head)));
console.log(result, result.join() === expected.join());

var head = [1, 2, 3, -3, -2, -1, 5];
var expected = [5];
var result = toArray(removeZeroSumSublists(createList(head)));
console.log(result, result.join() === expected.join());
