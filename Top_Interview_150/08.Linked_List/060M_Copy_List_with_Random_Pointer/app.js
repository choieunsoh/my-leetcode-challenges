// 138. Copy List with Random Pointer
// https://leetcode.com/problems/copy-list-with-random-pointer/
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
  let curr = head;
  const map = new Map();

  // first pass - copy node and set the into map
  while (curr !== null) {
    const copy = new Node(curr.val);
    map.set(curr, copy);
    curr = curr.next;
  }

  // second pass - set "random" and "next" for each copy node
  curr = head;
  while (curr !== null) {
    const copy = map.get(curr);
    if (map.has(curr.next)) copy.next = map.get(curr.next);
    if (map.has(curr.random)) copy.random = map.get(curr.random);
    curr = curr.next;
  }

  return map.get(head);
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
