// https://leetcode.com/problems/swap-nodes-in-pairs/
// 24. Swap Nodes in Pairs
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
var swapPairs = function (head) {
  const start = new ListNode(0);
  start.next = head;
  let node = start;

  while (node && node.next && node.next.next) {
    const first = node.next;
    const second = node.next.next;
    node.next = second;
    first.next = second.next;
    second.next = first;
    node = first;
  }

  return start.next;
};

var head = createList([1, 2, 3, 4]);
var expected = [2, 1, 4, 3];
var result = swapPairs(head);
console.log(toArray(result), toArray(result).join() === expected.join());

var head = createList([1, 2, 3, 4, 5]);
var expected = [2, 1, 4, 3, 5];
var result = swapPairs(head);
console.log(toArray(result), toArray(result).join() === expected.join());

var head = createList([]);
var expected = [];
var result = swapPairs(head);
console.log(toArray(result), toArray(result).join() === expected.join());

var head = createList([1]);
var expected = [1];
var result = swapPairs(head);
console.log(toArray(result), toArray(result).join() === expected.join());
