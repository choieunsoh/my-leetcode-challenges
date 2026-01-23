// 3510. Minimum Pair Removal to Sort Array II
// https://leetcode.com/problems/minimum-pair-removal-to-sort-array-ii/description/
// T.C.: O(n log n)
// S.C.: O(n)
const { PriorityQueue } = require('@datastructures-js/priority-queue');
const { DoublyLinkedList, DoublyLinkedListNode } = require('@datastructures-js/linked-list');

class Node extends DoublyLinkedListNode {
  value;
  left;
  constructor(value, left) {
    super(value);
    this.value = value;
    this.left = left;
  }
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumPairRemoval = function (nums) {
  const pq = new PriorityQueue((a, b) => (a.cost === b.cost ? a.first.left - b.first.left : a.cost - b.cost));

  const list = new DoublyLinkedList();
  const merged = new Array(nums.length).fill(false);
  let decreaseCount = 0;
  let count = 0;
  list.insertLast(new Node(nums[0], 0));

  for (let i = 1; i < nums.length; i++) {
    list.insertLast(new Node(nums[i], i));
    const curr = list.tail();
    pq.enqueue({
      first: curr.getPrev(),
      second: curr,
      cost: nums[i] + nums[i - 1],
    });
    if (nums[i - 1] > nums[i]) {
      decreaseCount++;
    }
  }

  while (decreaseCount > 0) {
    const { first, second, cost } = pq.dequeue();
    if (merged[first.left] || merged[second.left] || first.value + second.value !== cost) continue;
    count++;

    if (first.value > second.value) {
      decreaseCount--;
    }

    const prev = first.getPrev();
    const next = second.getNext();

    if (prev) {
      if (prev.value > first.value && prev.value <= cost) {
        decreaseCount--;
      }
      if (prev.value <= first.value && prev.value > cost) {
        decreaseCount++;
      }

      pq.enqueue({
        first: prev,
        second: first,
        cost: prev.value + cost,
      });
    }

    if (next) {
      if (second.value > next.value && cost <= next.value) {
        decreaseCount--;
      }
      if (second.value <= next.value && cost > next.value) {
        decreaseCount++;
      }

      pq.enqueue({
        first: first,
        second: next,
        cost: cost + next.value,
      });
    }

    list.remove(second);
    first.value = cost;
    merged[second.left] = true;
  }

  return count;
};

var nums = [5, 2, 3, 1];
var expected = 2;
var result = minimumPairRemoval(nums);
console.log(result, result === expected);

var nums = [5, 2, 2, 1];
var expected = 2;
var result = minimumPairRemoval(nums);
console.log(result, result === expected);

var nums = [1, 2, 2];
var expected = 0;
var result = minimumPairRemoval(nums);
console.log(result, result === expected);

var nums = [2, 2, -1, 3, -2, 2, 1, 1, 1, 0, -1];
var expected = 9;
var result = minimumPairRemoval(nums);
console.log(result, result === expected);

var nums = [-1, 2, 2, -2, -3, 0, 2, 1, 0, 0, 1];
var expected = 9;
var result = minimumPairRemoval(nums);
console.log(result, result === expected);

var nums = [-2, 1, 2, -1, -1, -2, -2, -1, -1, 1, 1];
var expected = 10;
var result = minimumPairRemoval(nums);
console.log(result, result === expected);
