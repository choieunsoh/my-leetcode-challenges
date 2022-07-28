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
var addTwoNumbers = (l1, l2, carry = 0) => {
  if (l1 === null && l2 === null) {
    return carry ? new ListNode(carry) : null;
  } else {
    const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;
    if (sum > 9) {
      return new ListNode(
        sum % 10,
        addTwoNumbers(l1?.next ?? null, l2?.next ?? null, 1)
      );
    } else {
      return new ListNode(
        sum % 10,
        addTwoNumbers(l1?.next ?? null, l2?.next ?? null)
      );
    }
  }
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
