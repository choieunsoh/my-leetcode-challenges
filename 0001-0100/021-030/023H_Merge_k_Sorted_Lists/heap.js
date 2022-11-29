// 23. Merge k Sorted Lists
// https://leetcode.com/problems/merge-k-sorted-lists/description/
const { ListNode, createList, toArray } = require('./utils');
class Heap {
  constructor(items = []) {
    this.data = items;
    this.length = items.length;
    this.comparer = (a, b) => a.val - b.val;

    for (let i = (this.length >> 1) - 1; i >= 0; i--) {
      this._up(i);
    }
  }
  peek() {
    return this.data[0];
  }
  push(item) {
    this.data.push(item);
    this.length++;
    this._up(this.length - 1);
  }
  pop() {
    if (this.length === 0) return undefined;
    const top = this.data[0];
    const bottom = this.data.pop();
    this.length--;
    if (this.length > 0) {
      this.data[0] = bottom;
      this._down(0);
    }
    return top;
  }
  _down(pos) {
    const { data, comparer } = this;
    const halfLength = this.length >> 1;
    const item = data[pos];
    while (pos < halfLength) {
      let left = (pos << 1) + 1;
      const right = left + 1;
      let best = data[left];
      if (right < this.length && comparer(data[right], best) < 0) {
        left = right;
        best = data[left];
      }
      if (comparer(best, item) >= 0) break;
      data[pos] = best;
      pos = left;
    }
    data[pos] = item;
  }
  _up(pos) {
    const { data, comparer } = this;
    const item = data[pos];
    while (pos > 0) {
      const parent = (pos - 1) >> 1;
      const current = data[parent];
      if (comparer(item, current) >= 0) break;
      data[pos] = current;
      pos = parent;
    }
    data[pos] = item;
  }
}
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (lists.length === 0) return null;
  const heap = new Heap();
  for (let i = 0; i < lists.length; i++) {
    if (lists[i]) heap.push(lists[i]);
  }

  let node = new ListNode();
  const temp = node;
  while (heap.length) {
    const min = heap.pop();
    node.next = min;
    node = node.next;
    if (min.next) heap.push(min.next);
  }
  return temp.next;
};

var lists = [
  [1, 4, 5],
  [1, 3, 4],
  [2, 6],
];
for (let i = 0; i < lists.length; i++) {
  lists[i] = createList(lists[i]);
}
var expected = [1, 1, 2, 3, 4, 4, 5, 6];
var result = toArray(mergeKLists(lists));
console.log(result, result.join() === expected.join());

var lists = [];
for (let i = 0; i < lists.length; i++) {
  lists[i] = createList(lists[i]);
}
var expected = [];
var result = toArray(mergeKLists(lists));
console.log(result, result.join() === expected.join());

var lists = [[]];
for (let i = 0; i < lists.length; i++) {
  lists[i] = createList(lists[i]);
}
var expected = [];
var result = toArray(mergeKLists(lists));
console.log(result, result.join() === expected.join());

var lists = [[], [1]];
for (let i = 0; i < lists.length; i++) {
  lists[i] = createList(lists[i]);
}
var expected = [1];
var result = toArray(mergeKLists(lists));
console.log(result, result.join() === expected.join());
