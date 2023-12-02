// 817. Linked List Components
// https://leetcode.com/problems/linked-list-components/
// T.C.: O(n)
// S.C.: O(m)
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
 * @param {number[]} nums
 * @return {number}
 */
var numComponents = function (head, nums) {
  let result = 0;
  let count = 0;
  const set = new Set(nums);
  while (head) {
    if (set.has(head.val)) {
      count++;
    } else {
      if (count) result++;
      count = 0;
    }
    head = head.next;
  }

  if (count) result++;
  return result;
};

var head = [0, 1, 2, 3],
  nums = [0, 1, 3];
var expected = 2;
var result = numComponents(createList(head), nums);
console.log(result, result === expected);

var head = [0, 1, 2, 3, 4],
  nums = [0, 3, 1, 4];
var expected = 2;
var result = numComponents(createList(head), nums);
console.log(result, result === expected);
