// 2074. Reverse Nodes in Even Length Groups
// https://leetcode.com/problems/reverse-nodes-in-even-length-groups/
// T.C.: O(n)
// S.C.: O(1)
const { ListNode, createList, toArray } = require('../../../_utils/list');
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
var reverseEvenLengthGroups = function (head) {
  if (head === null || head.next === null) {
    return head;
  }

  const dummy = new ListNode();
  dummy.next = head;
  let prevPtr = head;
  let currPtr = head.next;
  let groupNo = 2;

  while (currPtr) {
    const { result, subHead } = findEvenElements(currPtr, groupNo);

    if (result) {
      let { prev, curr } = reverseList(currPtr, subHead);
      prevPtr.next = prev;
      currPtr.next = curr;
      prevPtr = currPtr;
      currPtr = subHead;
    } else {
      while (prevPtr.next !== subHead) {
        prevPtr = prevPtr.next;
      }
      currPtr = subHead;
    }
    groupNo++;
  }
  return dummy.next;
};

function reverseList(start, end) {
  let prev = null;
  let curr = start;

  while (curr !== end) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return { prev, curr };
}

function findEvenElements(curr, groupNo) {
  let subHead = curr;
  let count = 0;
  while (subHead && count < groupNo) {
    subHead = subHead.next;
    count++;
  }
  return { result: count % 2 === 0, subHead };
}

var head = [5, 2, 6, 3, 9, 1, 7, 3, 8, 4];
var expected = [5, 6, 2, 3, 9, 1, 4, 8, 3, 7];
var result = toArray(reverseEvenLengthGroups(createList(head)));
console.log(result, result.join() === expected.join());

var head = [1, 1, 0, 6];
var expected = [1, 0, 1, 6];
var result = toArray(reverseEvenLengthGroups(createList(head)));
console.log(result, result.join() === expected.join());

var head = [1, 1, 0, 6, 5];
var expected = [1, 0, 1, 5, 6];
var result = toArray(reverseEvenLengthGroups(createList(head)));
console.log(result, result.join() === expected.join());
