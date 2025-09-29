// 3263. Convert Doubly Linked List to Array I
// https://leetcode.com/problems/convert-doubly-linked-list-to-array-i/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * // Definition for a _Node.
 * function _Node(val,prev,next) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 * };
 */
function _Node(val, prev, next) {
  this.val = val;
  this.prev = prev;
  this.next = next;
}

/**
 * @param {_Node} head
 * @return {number[]}
 */
var toArray = function (head) {
  const result = [];
  let current = head;
  while (current) {
    result.push(current.val);
    current = current.next;
  }
  return result;
};

// [1, 2, 3, 4, 3, 2, 1];
var head = new _Node(1, null, null);
var node1 = new _Node(2, head, null);
var node2 = new _Node(3, node1, null);
var node3 = new _Node(4, node2, null);
var node4 = new _Node(3, node3, null);
var node5 = new _Node(2, node4, null);
var node6 = new _Node(1, node5, null);
head.next = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
var expected = [1, 2, 3, 4, 3, 2, 1];
var result = toArray(head);
console.log(result, result.join() === expected.join());

// [2, 2, 2, 2, 2];
var head = new _Node(2, null, null);
var node1 = new _Node(2, head, null);
var node2 = new _Node(2, node1, null);
var node3 = new _Node(2, node2, null);
var node4 = new _Node(2, node3, null);
head.next = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;
var expected = [2, 2, 2, 2, 2];
var result = toArray(head);
console.log(result, result.join() === expected.join());

// [3, 2, 3, 2, 3, 2];
var head = new _Node(3, null, null);
var node1 = new _Node(2, head, null);
var node2 = new _Node(3, node1, null);
var node3 = new _Node(2, node2, null);
var node4 = new _Node(3, node3, null);
var node5 = new _Node(2, node4, null);
head.next = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
var expected = [3, 2, 3, 2, 3, 2];
var result = toArray(head);
console.log(result, result.join() === expected.join());
