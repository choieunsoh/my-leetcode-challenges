// 2807. Insert Greatest Common Divisors in Linked List
// https://leetcode.com/problems/insert-greatest-common-divisors-in-linked-list/
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
 * @return {ListNode}
 */
var insertGreatestCommonDivisors = function (head) {
  let temp = new ListNode(0, head);
  let curr = head;
  while (curr && curr.next) {
    const a = curr.val;
    const c = curr.next.val;
    const b = gcd(a, c);

    const middle = new ListNode(b);
    middle.next = curr.next;
    curr.next = middle;
    curr = middle.next;
  }
  return temp.next;

  function gcd(a, b) {
    return a === 0 ? b : gcd(b % a, a);
  }
};

var head = createList([18, 6, 10, 3]);
var expected = [18, 6, 6, 2, 10, 1, 3];
var result = toArray(insertGreatestCommonDivisors(head));
console.log(result, result.join() === expected.join());

var head = createList([7]);
var expected = [7];
var result = toArray(insertGreatestCommonDivisors(head));
console.log(result, result.join() === expected.join());
