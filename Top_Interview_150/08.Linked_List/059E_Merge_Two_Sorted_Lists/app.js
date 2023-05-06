// 21. Merge Two Sorted Lists
// https://leetcode.com/problems/merge-two-sorted-lists/
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
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (list1 === null) return list2;
  if (list2 === null) return list1;

  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};

var list1 = [1, 2, 4],
  list2 = [1, 3, 4];
var expected = [1, 1, 2, 3, 4, 4];
var result = toArray(mergeTwoLists(createList(list1), createList(list2)));
console.log(result, result.join() === expected.join());

var list1 = [],
  list2 = [];
var expected = [];
var result = toArray(mergeTwoLists(createList(list1), createList(list2)));
console.log(result, result.join() === expected.join());

var list1 = [],
  list2 = [0];
var expected = [0];
var result = toArray(mergeTwoLists(createList(list1), createList(list2)));
console.log(result, result.join() === expected.join());
