// reverseNodesInKGroups
// LC-21: https://leetcode.com/problems/merge-two-sorted-lists/
// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
/**
 * @param {ListNode} l
 * @param {number} k
 * @return {ListNode}
 */
function reverseNodesInKGroups(l, k) {
  if (!l) return null;
  const count = countNodes(l);
  return reverse(l, count);

  /**
   * @param {ListNode} head
   * @return {number}
   */
  function countNodes(head) {
    let count = 0;
    let curr = head;
    while (curr) {
      count++;
      curr = curr.next;
    }
    return count;
  }

  /**
   * @param {ListNode} head
   * @param {number} count
   * @return {ListNode}
   */
  function reverse(head, count) {
    let index = 0;
    let prev = null;
    let curr = head;
    let last = head;
    while (curr && index++ < k) {
      const next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    count -= k;
    last.next = count < k ? curr : reverse(curr, count);
    return prev;
  }
}
