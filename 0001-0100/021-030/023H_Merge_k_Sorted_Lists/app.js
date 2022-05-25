const { ListNode, createList, printList, mergeTwoLists } = require('./utils');

// https://leetcode.com/problems/merge-k-sorted-lists/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  for (let i = 0; i < lists.length; i++) {
    lists[i] = createList(lists[i]);
  }

  if (
    lists === null ||
    lists === undefined ||
    lists.length === 0 ||
    lists[0]?.length === 0
  ) {
    return null;
  }

  while (lists.length > 1) {
    const a = lists.shift();
    const b = lists.shift();
    const merge = mergeTwoLists(a, b);
    lists.push(merge);
  }
  return lists[0];
};

var lists = [
  [1, 4, 5],
  [1, 3, 4],
  [2, 6],
];
var result = mergeKLists(lists);
printList(result);

var lists = [];
var result = mergeKLists(lists);
printList(result);

var lists = [[]];
var result = mergeKLists(lists);
printList(result);
