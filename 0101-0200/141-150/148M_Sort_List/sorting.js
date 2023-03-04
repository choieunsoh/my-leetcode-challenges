// 148. Sort List
// https://leetcode.com/problems/sort-list/
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
var sortList = function (head) {
  if (!head || !head.next) return head;
  const nodes = [];
  while (head) {
    nodes.push(head);
    head = head.next;
  }
  nodes.sort((a, b) => a.val - b.val);
  for (let i = 1; i < nodes.length; i++) {
    nodes[i - 1].next = nodes[i];
    nodes[i].next = null;
  }
  nodes.length = 1;
  return nodes[0];
};

var head = [4, 2, 1, 3];
var expected = [1, 2, 3, 4];
var result = toArray(sortList(createList(head)));
console.log(result, result.join() === expected.join());

var head = [-1, 5, 3, 4, 0];
var expected = [-1, 0, 3, 4, 5];
var result = toArray(sortList(createList(head)));
console.log(result, result.join() === expected.join());

var head = [];
var expected = [];
var result = toArray(sortList(createList(head)));
console.log(result, result.join() === expected.join());
