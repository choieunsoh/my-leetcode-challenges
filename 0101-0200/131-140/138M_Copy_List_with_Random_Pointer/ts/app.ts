// 138. Copy List with Random Pointer
// https://leetcode.com/problems/copy-list-with-random-pointer/
/**
 * Definition for Node138.
 * class Node138 {
 *     val: number
 *     next: Node138 | null
 *     random: Node138 | null
 *     constructor(val?: number, next?: Node138, random?: Node138) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */
class Node {
  val: number;
  next: Node | null;
  random: Node | null;
  constructor(val?: number, next?: Node, random?: Node) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.random = random === undefined ? null : random;
  }
}
var copyRandomList = function (head: Node | null): Node | null {
  if (!head) return null;

  const map = new Map<Node | null, Node | null>();
  let curr: Node | null = head;
  while (curr) {
    const copy = new Node(curr.val);
    map.set(curr, copy);
    curr = curr.next;
  }

  curr = head;
  while (curr) {
    const { next, random } = curr;
    const copy = map.get(curr)!;
    if (map.has(next)) copy.next = map.get(next)!;
    if (map.has(random)) copy.random = map.get(random)!;
    curr = curr.next;
  }

  return map.get(head)!;
};

function toArray(head: Node | null) {
  const result: (number | null)[][] = [];
  let curr = head;
  while (curr) {
    result.push([curr.val, curr.random?.val ?? null]);
    curr = curr.next;
  }
  return result;
}

var head1 = [
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
var n7 = new Node(7);
var n13 = new Node(13);
var n11 = new Node(11);
var n10 = new Node(10);
var n1 = new Node(1);
n7.next = n13;
n13.next = n11;
n11.next = n10;
n10.next = n1;
n13.random = n7;
n11.random = n1;
n10.random = n11;
n1.random = n7;
var head = n7;
var result = copyRandomList(head);
console.log(toArray(result));
console.log(expected);
