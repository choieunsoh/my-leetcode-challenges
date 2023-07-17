// 445. Add Two Numbers II
// https://leetcode.com/problems/add-two-numbers-ii/
const { ListNode, createList, toArray } = require('../../../_utils/list');
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  l1 = reverseLinkedList(l1);
  l2 = reverseLinkedList(l2);

  let result = null;
  let carry = 0;
  while (l1 || l2 || carry) {
    let sum = carry;

    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    carry = Math.floor(sum / 10);

    const node = new ListNode(sum % 10);
    node.next = result;
    result = node;
  }

  return result;

  function reverseLinkedList(head) {
    let prev = null;
    let current = head;

    while (current) {
      let nextNode = current.next;
      current.next = prev;
      prev = current;
      current = nextNode;
    }

    return prev;
  }
};

var l1 = createList([7, 2, 4, 3]),
  l2 = createList([5, 6, 4]);
var expected = [7, 8, 0, 7];
var result = toArray(addTwoNumbers(l1, l2));
console.log(result, result.join() === expected.join());

var l1 = createList([2, 4, 3]),
  l2 = createList([5, 6, 4]);
var expected = [8, 0, 7];
var result = toArray(addTwoNumbers(l1, l2));
console.log(result, result.join() === expected.join());

var l1 = createList([0]),
  l2 = createList([0]);
var expected = [0];
var result = toArray(addTwoNumbers(l1, l2));
console.log(result, result.join() === expected.join());
