// 1019. Next Greater Node In Linked List
// https://leetcode.com/problems/next-greater-node-in-linked-list/
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
 * @return {number[]}
 */
var nextLargerNodes = function (head) {
  const result = [];
  let curr = head;
  let i = 0;
  const stack = [];
  while (curr) {
    result[i] = 0;
    while (stack.length && stack[stack.length - 1][1] < curr.val) {
      const [index] = stack.pop();
      result[index] = curr.val;
    }

    stack.push([i++, curr.val]);
    curr = curr.next;
  }
  return result;
};

var head = [2, 1, 5];
var expected = [5, 5, 0];
var result = nextLargerNodes(createList(head));
console.log(result, result.join() === expected.join());

var head = [2, 7, 4, 3, 5];
var expected = [7, 0, 5, 5, 0];
var result = nextLargerNodes(createList(head));
console.log(result, result.join() === expected.join());
