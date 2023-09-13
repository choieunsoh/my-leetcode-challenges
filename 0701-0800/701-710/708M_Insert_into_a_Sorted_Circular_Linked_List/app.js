// 708. Insert into a Sorted Circular Linked List
// https://leetcode.com/problems/insert-into-a-sorted-circular-linked-list/
const { ListNode, createList, toArray } = require('../../../_utils/list');
/**
 * // Definition for a Node.
 * function Node(val, next) {
 *     this.val = val;
 *     this.next = next;
 * };
 */

/**
 * @param {Node} head
 * @param {number} insertVal
 * @return {Node}
 */
var insert = function (head, insertVal) {
  const newNode = new ListNode(insertVal);
  if (!head) {
    newNode.next = newNode;
    return newNode;
  }

  let curr = head;
  let next = head.next;
  while (next !== head) {
    const currVal = curr.val;
    const nextVal = next.val;

    // Condition 1 Example: [2, 3, 5, 1]  val = 4
    const middleCase = insertVal >= currVal && insertVal <= nextVal;
    // Condition 2 Example: [2, 3, 5, 1]  val = 0
    const minimumCase = nextVal < currVal && insertVal <= currVal && insertVal <= nextVal;
    // Condition 3 Example: [2, 3, 5, 1]  val = 6
    const maximumCase = nextVal < currVal && insertVal >= currVal;

    if (middleCase || minimumCase || maximumCase) {
      curr.next = newNode;
      newNode.next = next;
      return head;
    }

    curr = next;
    next = next.next;
  }

  curr.next = newNode;
  newNode.next = head;
  return head;
};

var head = createList([3, 4, 1]),
  insertVal = 2;
var expected = [3, 4, 1, 2];
var result = toArray(insert(head, insertVal));
console.log(result, result.join() === expected.join());

var head = createList([]),
  insertVal = 1;
var expected = [1];
var result = toArray(insert(head, insertVal));
console.log(result, result.join() === expected.join());

var head = linkCycle(createList([1])),
  insertVal = 0;
var expected = [1, 0];
var result = toArray(insert(head, insertVal));
console.log(result, result.join() === expected.join());
