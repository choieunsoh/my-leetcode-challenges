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
  const nums1 = [];
  const nums2 = [];
  let curr = l1;
  while (curr) {
    nums1.push(curr.val);
    curr = curr.next;
  }
  curr = l2;
  while (curr) {
    nums2.push(curr.val);
    curr = curr.next;
  }

  let i = nums1.length - 1;
  let j = nums2.length - 1;
  let carry = 0;
  let result = null;
  while (i >= 0 || j >= 0 || carry > 0) {
    let sum = carry;
    if (i >= 0) sum += nums1[i--];
    if (j >= 0) sum += nums2[j--];
    carry = (sum / 10) | 0;
    const node = new ListNode(sum % 10);
    node.next = result;
    result = node;
  }

  return result;
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
