// https://leetcode.com/problems/copy-list-with-random-pointer/
// 138. Copy List with Random Pointer
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
function Node(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;
}

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (!head) return head;

  let curr = head;
  while (curr) {
    let next = curr.next;
    let copy = new Node(curr.val);
    curr.next = copy;
    copy.next = next;
    curr = next;
  }

  curr = head;
  while (curr && curr.next) {
    curr.next.random = curr.random ? curr.random.next : null;
    curr = curr.next.next;
  }

  curr = head;
  let copyHead = head.next;
  while (curr && curr.next) {
    const next = curr.next;
    curr.next = curr.next.next;
    curr = next;
  }

  return copyHead;
};
function toArray(head) {
  const result = [];
  let curr = head;
  while (curr) {
    result.push([curr.val, curr.random?.val]);
    curr = curr.next;
  }
  return result;
}

var head = [
  [7, null],
  [13, 0],
  [11, 4],
  [10, 2],
  [1, 0],
];
var expected = [
  [7, null],
  [13, 0],
  [11, 4],
  [10, 2],
  [1, 0],
];
var n7 = new Node(7, null, null);
var n13 = new Node(13, null, null);
var n11 = new Node(11, null, null);
var n10 = new Node(10, null, null);
var n1 = new Node(1, null, null);
n7.next = n13;
n13.next = n11;
n11.next = n10;
n10.next = n1;
n13.random = n7;
n11.random = n1;
n10.random = n11;
n1.random = n7;
head = n7;
var result = copyRandomList(head);
console.log(toArray(result));

var head = [
  [1, 1],
  [2, 1],
];
var expected = [
  [1, 1],
  [2, 1],
];

var head = [
  [3, null],
  [3, 0],
  [3, null],
];
var expected = [
  [3, null],
  [3, 0],
  [3, null],
];
