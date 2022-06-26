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
  if (!head || !head.next) {
    return head;
  }

  const newHead = head.next;
  const nextOfNext = head.next.next;
  head.next = swapPairs(nextOfNext);
  newHead.next = head;
  return newHead;
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
