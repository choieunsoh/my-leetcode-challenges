// rearrangeLastN
// LC-21: https://leetcode.com/problems/merge-two-sorted-lists/
// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
/**
 * @param {ListNode} l
 * @param {number} n
 * @return {ListNode}
 */
function rearrangeLastN(l, n) {
  if (!l || !n) return l;
  let count = 0;
  const map = new Map();
  let curr = l;
  while (curr) {
    map.set(count++, curr);
    curr = curr.next;
  }
  n %= count;
  if (!n) return l;

  const oldHead = l;
  const oldTail = map.get(count - 1);
  oldTail.next = oldHead;

  const newTail = map.get(count - n - 1);
  const newHead = newTail.next;
  newTail.next = null;

  return newHead;
}
