// https://leetcode.com/problems/merge-two-sorted-lists/
// 21. Merge Two Sorted Lists
const { ListNode, createList, printList } = require('../../../_utils/list');
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = (curr1, curr2) => {
  let result = new ListNode(0);
  let curr = result;
  while (true) {
    if (curr1 === null) {
      curr.next = curr2;
      break;
    }
    if (curr2 === null) {
      curr.next = curr1;
      break;
    }

    if (curr1.val <= curr2.val) {
      curr.next = curr1;
      curr1 = curr1.next;
    } else {
      curr.next = curr2;
      curr2 = curr2.next;
    }

    curr = curr.next;
  }

  return result.next;
};

var list1 = [1, 2, 4];
var list2 = [1, 3, 4];

var x1 = createList(list1);
var x2 = createList(list2);
var x3 = mergeTwoLists(x1, x2);
printList(x3);
