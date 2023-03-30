// mergeTwoLinkedLists
// LC-21: https://leetcode.com/problems/merge-two-sorted-lists/
// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function mergeTwoLinkedLists(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;
  if (l1.value < l2.value) {
    l1.next = mergeTwoLinkedLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLinkedLists(l1, l2.next);
    return l2;
  }
}
