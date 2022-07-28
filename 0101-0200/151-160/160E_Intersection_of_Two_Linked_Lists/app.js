// https://leetcode.com/problems/intersection-of-two-linked-lists/
// 160. Intersection of Two Linked Lists
const { ListNode, createList } = require('../../../_utils/list');
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let nodeA = headA;
  let nodeB = headB;
  while (nodeA !== nodeB) {
    nodeA = nodeA ? nodeA.next : headB;
    nodeB = nodeB ? nodeB.next : headA;
  }
  return nodeA;
};

var intersectVal = 8,
  listA = [4, 1, 8, 4, 5],
  listB = [5, 6, 1, 8, 4, 5],
  skipA = 2,
  skipB = 3;
console.log(getIntersectionNode(createList(listA), createList(listB)));

var intersectVal = 2,
  listA = [1, 9, 1, 2, 4],
  listB = [3, 2, 4],
  skipA = 3,
  skipB = 1;
console.log(getIntersectionNode(createList(listA), createList(listB)));

var intersectVal = 0,
  listA = [2, 6, 4],
  listB = [1, 5],
  skipA = 3,
  skipB = 2;
console.log(getIntersectionNode(createList(listA), createList(listB)));
