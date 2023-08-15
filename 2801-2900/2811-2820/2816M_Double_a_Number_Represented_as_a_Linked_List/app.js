// 2816. Double a Number Represented as a Linked List
// https://leetcode.com/problems/double-a-number-represented-as-a-linked-list/
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
var doubleIt = function (head) {
  const reverseHead = reverse(head);
  let temp = new ListNode(0, reverseHead);
  let curr = reverseHead;
  let carry = 0;
  while (curr) {
    const sum = 2 * curr.val + carry;
    carry = (sum / 10) | 0;
    curr.val = sum % 10;
    if (!curr.next && carry) {
      const node = new ListNode(carry);
      curr.next = node;
      break;
    }
    curr = curr.next;
  }
  return reverse(temp.next);

  function reverse(head) {
    let prev = null;
    let curr = head;
    while (curr) {
      const next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return prev;
  }
};

var head = [1, 8, 9];
var expected = [3, 7, 8];
var result = toArray(doubleIt(createList(head)));
console.log(result, result.join() === expected.join());

var head = [9, 9, 9];
var expected = [1, 9, 9, 8];
var result = toArray(doubleIt(createList(head)));
console.log(result, result.join() === expected.join());
