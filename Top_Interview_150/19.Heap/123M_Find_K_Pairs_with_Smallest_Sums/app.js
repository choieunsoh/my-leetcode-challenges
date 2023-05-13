// 373. Find K Pairs with Smallest Sums
// https://leetcode.com/problems/find-k-pairs-with-smallest-sums/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {
  const result = [];
  const heap = new MinHeap();
  const n = nums1.length;
  for (let i = 0; i < n; i++) {
    heap.push([nums1[i], nums2[0], 0]);
  }

  while (k-- > 0 && heap.length > 0) {
    const [num1, num2, nums2Index] = heap.pop();
    result.push([num1, num2]);
    if (nums2Index === nums2.length - 1) continue;
    const nums2NextIndex = nums2Index + 1;
    heap.push([num1, nums2[nums2NextIndex], nums2NextIndex]);
  }

  return result;
};

class MinHeap {
  constructor() {
    this.compare = (a, b) => a[0] + a[1] - (b[0] + b[1]);
    this.length = 0;
    this.data = [];
  }
  peek() {
    return this.data[0];
  }
  push(item) {
    this.data.push(item);
    this.length++;
    this.__up(this.length - 1);
  }
  pop() {
    if (this.length === 0) return undefined;
    const top = this.peek();
    const bottom = this.data.pop();
    this.length--;
    if (this.length > 0) {
      this.data[0] = bottom;
      this.__down(0);
    }
    return top;
  }
  __down(pos) {
    const { data, compare, length } = this;
    const currentItem = data[pos];
    const halfLength = length >> 1;
    while (pos < halfLength) {
      const parent = pos << 1;
      let left = parent + 1;
      let leftItem = data[left];
      const right = left + 1;
      const rightItem = data[right];
      if (right < length && compare(rightItem, leftItem) < 0) {
        leftItem = rightItem;
        left = right;
      }
      if (compare(leftItem, currentItem) >= 0) break;
      data[pos] = leftItem;
      pos = left;
    }
    data[pos] = currentItem;
  }
  __up(pos) {
    const { data, compare } = this;
    const currentItem = data[pos];
    while (pos > 0) {
      const parent = (pos - 1) >> 1;
      const parentItem = data[parent];
      if (compare(currentItem, parentItem) >= 0) break;
      data[pos] = parentItem;
      pos = parent;
    }
    data[pos] = currentItem;
  }
}

var nums1 = [1, 7, 11],
  nums2 = [2, 4, 6],
  k = 3;
var expected = [
  [1, 2],
  [1, 4],
  [1, 6],
];
var result = kSmallestPairs(nums1, nums2, k);
console.log(result, result.join() == expected.join());

var nums1 = [1, 1, 2],
  nums2 = [1, 2, 3],
  k = 2;
var expected = [
  [1, 1],
  [1, 1],
];
var result = kSmallestPairs(nums1, nums2, k);
console.log(result, result.join() == expected.join());

var nums1 = [1, 2],
  nums2 = [3],
  k = 3;
var expected = [
  [1, 3],
  [2, 3],
];
var result = kSmallestPairs(nums1, nums2, k);
console.log(result, result.join() == expected.join());
