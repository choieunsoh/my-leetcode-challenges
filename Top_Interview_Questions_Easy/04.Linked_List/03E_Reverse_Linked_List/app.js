// https://leetcode.com/problems/reverse-linked-list/
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
var reverseList = function (head) {
  let prev = null;
  let curr = head;
  while (curr) {
    let next = new ListNode(curr.val);
    if (prev) next.next = prev.next;
    prev = new ListNode(0);
    prev.next = next;
    //console.log(next);
    curr = curr.next;
  }

  return prev ? prev.next : null;
};
