// 2130. Maximum Twin Sum of a Linked List
// https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/
// T.C.: O(n)
// S.C.: O(n)
const { ListNode, createList } = require('../../../_utils/list');
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
  let maxSum = Number.MIN_SAFE_INTEGER;
  const nums = [];
  while (head) {
    nums.push(head.val);
    head = head.next;
  }

  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    maxSum = Math.max(maxSum, nums[left++] + nums[right--]);
  }
  return maxSum;
};

var head = [5, 4, 2, 1];
var expected = 6;
var result = pairSum(createList(head));
console.log(result, result === expected);

var head = [4, 2, 2, 3];
var expected = 7;
var result = pairSum(createList(head));
console.log(result, result === expected);

var head = [1, 100000];
var expected = 100001;
var result = pairSum(createList(head));
console.log(result, result === expected);
