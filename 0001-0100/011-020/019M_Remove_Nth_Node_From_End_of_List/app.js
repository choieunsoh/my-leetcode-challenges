// 19. Remove Nth Node From End of List
// https://leetcode.com/problems/remove-nth-node-from-end-of-list/
// T.C.: O(n)
// S.C.: O(1)
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let temp = new ListNode(0, head);
  let slow = temp;
  let fast = temp;
  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }
  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;
  return temp.next;
};

var head = [1, 2, 3, 4, 5],
  n = 2;
var expected = [1, 2, 3, 5];
var actual = removeNthFromEnd(createList(head), n);
console.log(toArray(actual), toArray(actual).join() === expected.join());

var head = [1],
  n = 1;
var expected = [];
var actual = removeNthFromEnd(createList(head), n);
console.log(toArray(actual), toArray(actual).join() === expected.join());

var head = [1, 2],
  n = 1;
var expected = [1];
var actual = removeNthFromEnd(createList(head), n);
console.log(toArray(actual), toArray(actual).join() === expected.join());
