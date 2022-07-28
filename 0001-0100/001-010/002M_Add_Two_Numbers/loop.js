// https://leetcode.com/problems/add-two-numbers/
// 2. Add Two Numbers
const { ListNode, createList, toArray } = require('../../../_utils/list');
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
var addTwoNumbers = (l1, l2) => {
  const result = new ListNode();
  let node = result;
  let carry = 0;
  while (l1 || l2) {
    const a = l1?.val ?? 0;
    const b = l2?.val ?? 0;
    const sum = a + b + carry;
    carry = sum > 9 ? 1 : 0;

    node.next = new ListNode(sum % 10);
    node = node.next;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  if (carry) node.next = new ListNode(carry);
  return result.next;
};

var l1 = createList([9, 9, 9, 9, 9, 9, 9]);
var l2 = createList([9, 9, 9, 9]);
var expected = [8, 9, 9, 9, 0, 0, 0, 1];
var result = toArray(addTwoNumbers(l1, l2));
console.log(result, result.join() === expected.join());

var l1 = createList([2, 4, 3]);
var l2 = createList([5, 6, 4]);
var expected = [7, 0, 8];
var result = toArray(addTwoNumbers(l1, l2));
console.log(result, result.join() === expected.join());
