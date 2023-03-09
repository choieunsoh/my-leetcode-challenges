// 2. Add Two Numbers
// https://leetcode.com/problems/add-two-numbers/
const { ListNode, createList, toArray } = require('../../../../_utils/list');
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
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const result = new ListNode();
  let node = result;
  let carry = 0;
  while (l1 || l2 || carry) {
    const val1 = l1?.val ?? 0;
    const val2 = l2?.val ?? 0;
    const sum = val1 + val2 + carry;
    node.next = new ListNode(sum % 10);
    carry = (sum / 10) | 0;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
    node = node.next;
  }
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
