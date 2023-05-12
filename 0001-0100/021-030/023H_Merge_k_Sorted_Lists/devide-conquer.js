// 23. Merge k Sorted Lists
// https://leetcode.com/problems/merge-k-sorted-lists/
const { ListNode, createList, toArray } = require('./utils');
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
  let n = lists.length;
  let interval = 1;
  while (interval < n) {
    for (let i = 0; i < n - interval; i += interval * 2) {
      lists[i] = mergeTwoLists(lists[i], lists[i + interval]);
    }
    interval *= 2;
  }
  return lists.length ? lists[0] : null;

  function mergeTwoLists(l1, l2) {
    const head = new ListNode(0);
    let curr = head;
    while (l1 && l2) {
      if (l1.val < l2.val) {
        curr.next = l1;
        l1 = l1.next;
      } else {
        curr.next = l2;
        l2 = l2.next;
      }
      curr = curr.next;
    }
    if (l1) {
      curr.next = l1;
    } else {
      curr.next = l2;
    }
    return head.next;
  }
};

var lists = [
  [1, 4, 5],
  [1, 3, 4],
  [2, 6],
];
for (let i = 0; i < lists.length; i++) {
  lists[i] = createList(lists[i]);
}
var expected = [1, 1, 2, 3, 4, 4, 5, 6];
var result = toArray(mergeKLists(lists));
console.log(result, result.join() === expected.join());

var lists = [];
for (let i = 0; i < lists.length; i++) {
  lists[i] = createList(lists[i]);
}
var expected = [];
var result = toArray(mergeKLists(lists));
console.log(result, result.join() === expected.join());

var lists = [[]];
for (let i = 0; i < lists.length; i++) {
  lists[i] = createList(lists[i]);
}
var expected = [];
var result = toArray(mergeKLists(lists));
console.log(result, result.join() === expected.join());
