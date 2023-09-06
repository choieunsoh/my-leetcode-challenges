// 725. Split Linked List in Parts
// https://leetcode.com/problems/split-linked-list-in-parts
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
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function (head, k) {
  let n = 0;
  let curr = head;
  while (curr) {
    n++;
    curr = curr.next;
  }

  const result = Array.from({ length: k }, () => null);
  const min = (n / k) | 0;
  let odd = n % k;
  const counts = new Array(k).fill(min);
  while (odd) {
    counts[--odd]++;
  }

  curr = head;
  for (let i = 0; i < k; i++) {
    const tempHead = curr;
    let count = counts[i];
    while (curr && count > 1) {
      curr = curr.next;
      count--;
    }

    if (curr) {
      result[i] = tempHead;
      const next = curr.next;
      curr.next = null;
      curr = next;
    }
  }

  return result;
};

var head = createList([1, 2, 3]),
  k = 5;
var expected = [[1], [2], [3], [], []];
var result = splitListToParts(head, k).map(toArray);
console.log(result, result.join() === expected.join());

var head = createList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
  k = 3;
var expected = [
  [1, 2, 3, 4],
  [5, 6, 7],
  [8, 9, 10],
];
var result = splitListToParts(head, k).map(toArray);
console.log(result, result.join() === expected.join());
