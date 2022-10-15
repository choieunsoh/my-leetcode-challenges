// https://leetcode.com/problems/merge-two-sorted-lists/
// 21. Merge Two Sorted Lists
import { ListNode, createList, printList } from '../../../../_utils/list';
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
type ListNode2 = ListNode | null;
var mergeTwoLists = function (list1: ListNode2, list2: ListNode2): ListNode2 {
  if (list1 === null) return list2;
  if (list2 === null) return list1;

  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};

var list1 = [1, 2, 4];
var list2 = [1, 3, 4];

var x1 = createList(list1);
var x2 = createList(list2);
var x3 = mergeTwoLists(x1, x2);
printList(x3);
