// https://leetcode.com/problems/remove-nth-node-from-end-of-list/
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
  const findIndex = (head) => {
    let count = 0;
    while (head) {
      count++;
      head = head.next;
    }
    return count + 1 - n;
  };

  const x = findIndex(head);
  if (x === 1 && head.next === null) {
    return null;
  }

  if (x === 1) {
    head = head.next;
    return head;
  }

  let current = head;
  let prev = head;
  let index = 1;
  while (current.next && index !== x) {
    prev = current;
    current = current.next;
    index++;
  }
  prev.next = current.next;

  return head;
};
