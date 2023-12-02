// 2487. Remove Nodes From Linked List
// https://leetcode.com/problems/remove-nodes-from-linked-list/
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
var removeNodes = function (head) {
  let curr = head;
  const stack = [];
  while (curr) {
    while (stack.length && stack[stack.length - 1] < curr.val) {
      stack.pop();
    }
    stack.push(curr.val);
    curr = curr.next;
  }

  while (stack.length) {
    curr = new ListNode(stack.pop(), curr);
  }
  return curr;
};

var head = [5, 2, 13, 3, 8];
var expected = [13, 8];
var result = toArray(removeNodes(createList(head)));
console.log(result, result.join() === expected.join());

var head = [1, 1, 1, 1];
var expected = [1, 1, 1, 1];
var result = toArray(removeNodes(createList(head)));
console.log(result, result.join() === expected.join());
