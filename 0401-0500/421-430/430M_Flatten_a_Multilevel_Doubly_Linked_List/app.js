// https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/
// 430. Flatten a Multilevel Doubly Linked List
/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */
function Node(val, prev, next, child) {
  this.val = val;
  this.prev = prev;
  this.next = next;
  this.child = child;
}
function appendNode(head, nums) {
  if (nums.length === 0) return null;
  if (!head) head = new Node(nums[0]);
  let curr = head;
  for (let i = 1; i < nums.length; i++) {
    const next = new Node(nums[i]);
    next.prev = curr;
    curr.next = next;
    curr = curr.next;
  }
  return head;
}
function addChild(head, val, child) {
  let node = head;
  while (node) {
    if (node.val === val) {
      node.child = child;
      return head;
    }
    node = node.next;
  }
  console.log(node);
  return head;
}
function toArray(head) {
  const result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
  if (!head) return head;

  let curr = head;
  while (curr) {
    if (!curr.child) {
      curr = curr.next;
    } else {
      let child = curr.child;
      while (child.next) {
        child = child.next;
      }
      child.next = curr.next;
      if (child.next) {
        child.next.prev = child;
      }

      curr.next = curr.child;
      curr.next.prev = curr;
      curr.child = null;
    }
  }
  return head;
};

var head = [
  1,
  2,
  3,
  4,
  5,
  6,
  null,
  null,
  null,
  7,
  8,
  9,
  10,
  null,
  null,
  11,
  12,
];
var expected = [1, 2, 3, 7, 8, 11, 12, 9, 10, 4, 5, 6];
var head = appendNode(null, [1, 2, 3, 4, 5, 6]);
var child1 = appendNode(null, [7, 8, 9, 10]);
var child2 = appendNode(null, [11, 12]);
child1 = addChild(child1, 8, child2);
head = addChild(head, 3, child1);
var result = flatten(head);
console.log(toArray(result), toArray(result).join() === expected.join());

var head = [1, 2, null, 3];
var expected = [1, 3, 2];
var head = appendNode(null, [1, 2]);
var child1 = appendNode(null, [3]);
head = addChild(head, 1, child1);
var result = flatten(head);
console.log(toArray(result), toArray(result).join() === expected.join());

var head = [];
var expected = [];
var head = appendNode(null, []);
var result = flatten(head);
console.log(toArray(result), toArray(result).join() === expected.join());
