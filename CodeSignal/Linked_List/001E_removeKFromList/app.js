// removeKFromList
// LC-203: https://leetcode.com/problems/remove-linked-list-elements/
// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
/**
 * @param {ListNode} l
 * @param {number} k
 * @return {boolean}
 */
function removeKFromList(l, k) {
  if (!l) return null;
  let temp = new ListNode(0);
  temp.next = l;
  let prev = temp;
  let curr = temp.next;
  while (curr) {
    if (curr.value === k) {
      prev.next = curr.next;
    } else {
      prev = curr;
    }
    curr = curr.next;
  }
  return temp.next;
}
