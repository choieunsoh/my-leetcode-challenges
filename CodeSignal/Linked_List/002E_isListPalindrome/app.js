// isListPalindrome
// LC-234: https://leetcode.com/problems/palindrome-linked-list/
// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
/**
 * @param {ListNode} l
 * @return {boolean}
 */
function isListPalindrome(l) {
  let slow = l;
  let fast = l;
  while (slow && fast?.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  fast = reverse(slow);
  slow = l;
  while (slow && fast) {
    if (slow.value !== fast.value) return false;
    slow = slow.next;
    fast = fast.next;
  }
  return true;

  function reverse(head) {
    let prev = null;
    let curr = head;
    while (curr) {
      const next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return prev;
  }
}
