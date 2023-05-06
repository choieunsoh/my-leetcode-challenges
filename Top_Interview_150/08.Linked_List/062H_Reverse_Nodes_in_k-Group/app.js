// 25. Reverse Nodes in k-Group
// https://leetcode.com/problems/reverse-nodes-in-k-group/
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
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  const count = countNode(head);
  const reversed = reverse(head, k, count);
  return reversed;

  function countNode(node) {
    let count = 0;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  function reverse(head, k, count) {
    if (!head) return head;

    let index = 0;
    let prev = null;
    let curr = head;
    let tail = head;
    while (curr && index < k) {
      const next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
      index++;
    }
    count -= k;
    tail.next = count < k ? curr : reverse(curr, k, count);

    return prev;
  }
};

var head = [1, 2, 3, 4, 5],
  k = 2;
var expected = [2, 1, 4, 3, 5];
var result = toArray(reverseKGroup(createList(head), k));
console.log(result, result.join() === expected.join());

var head = [1, 2, 3, 4, 5],
  k = 3;
var expected = [3, 2, 1, 4, 5];
var result = toArray(reverseKGroup(createList(head), k));
console.log(result, result.join() === expected.join());
