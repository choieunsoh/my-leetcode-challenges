// 1669. Merge In Between Linked Lists
// https://leetcode.com/problems/merge-in-between-linked-lists/
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
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function (list1, a, b, list2) {
  let start = null;
  let end = null;
  let curr = list1;
  let i = 0;
  while (curr) {
    if (i === a - 1) {
      start = curr;
    } else if (i === b) {
      end = curr.next;
    }
    curr = curr.next;
    i++;
  }
  start.next = list2;

  curr = list2;
  while (curr.next) {
    curr = curr.next;
  }
  curr.next = end;

  return list1;
};

var list1 = [0, 1, 2, 3, 4, 5],
  a = 3,
  b = 4,
  list2 = [1000000, 1000001, 1000002];
var expected = [0, 1, 2, 1000000, 1000001, 1000002, 5];
var result = toArray(mergeInBetween(createList(list1), a, b, createList(list2)));
console.log(result, result.join() === expected.join());

var list1 = [0, 1, 2, 3, 4, 5, 6],
  a = 2,
  b = 5,
  list2 = [1000000, 1000001, 1000002, 1000003, 1000004];
var expected = [0, 1, 1000000, 1000001, 1000002, 1000003, 1000004, 6];
var result = toArray(mergeInBetween(createList(list1), a, b, createList(list2)));
console.log(result, result.join() === expected.join());
