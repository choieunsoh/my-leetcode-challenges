// addTwoHugeNumbers
// LC-445: https://leetcode.com/problems/add-two-numbers-ii/
// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
/**
 * @param {ListNode} a
 * @param {ListNode} b
 * @return {ListNode}
 */
function addTwoHugeNumbers(a, b) {
  a = reverse(a);
  b = reverse(b);

  let carry = 0;
  let head = null;
  while (a || b || carry) {
    const sum = (a?.value ?? 0) + (b?.value ?? 0) + carry;
    carry = (sum / 10000) | 0;

    const node = new ListNode(sum % 10000);
    node.next = head;
    head = node;

    if (a) a = a.next;
    if (b) b = b.next;
  }
  return head;

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
