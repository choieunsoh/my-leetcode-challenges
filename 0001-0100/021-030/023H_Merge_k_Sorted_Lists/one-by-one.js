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

  let result = null;
  for (let i = 0; i < lists.length; i++) {
    result = mergeTwoLists(result, lists[i]);
  }
  return result;
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
