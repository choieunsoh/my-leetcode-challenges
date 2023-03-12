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
  const nums = [];
  for (let i = 0; i < lists.length; i++) {
    let curr = lists[i];
    while (curr) {
      nums.push(curr.val);
      curr = curr.next;
    }
  }

  if (nums.length === 0) return null;

  nums.sort((a, b) => a - b);

  const dummy = new ListNode();
  let curr = dummy;
  for (let i = 0; i < nums.length; i++) {
    const newNode = new ListNode(nums[i]);
    curr.next = newNode;
    curr = curr.next;
  }
  return dummy.next;
};

var lists = [
  [1, 4, 5],
  [1, 3, 4],
  [2, 6],
];
var expected = [1, 1, 2, 3, 4, 4, 5, 6];
var result = toArray(mergeKLists(lists));
printList(result, result.join() === expected.join());

var lists = [];
var expected = [];
var result = toArray(mergeKLists(lists));
printList(result, result.join() === expected.join());

var lists = [[]];
var expected = [];
var result = toArray(mergeKLists(lists));
printList(result, result.join() === expected.join());
