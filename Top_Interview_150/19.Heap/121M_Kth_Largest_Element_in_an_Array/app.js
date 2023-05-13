// 215. Kth Largest Element in an Array
// https://leetcode.com/problems/kth-largest-element-in-an-array/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const heap = new MaxHeap(nums);
  let index = 0;
  while (index++ < k - 1) {
    heap.pop();
  }
  return heap.pop();
};

class MaxHeap {
  constructor(data = [], compare = (a, b) => b - a) {
    this.length = data.length;
    this.data = data;
    this.compare = compare;
    if (this.length > 0) {
      for (let i = (this.length >> 1) - 1; i >= 0; i--) {
        this.__down(i);
      }
    }
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
    const { data, length, compare } = this;
    const currentItem = data[pos];
    const halfLength = length >> 1;
    //      pos
    // left      right
    while (pos < halfLength) {
      let left = (pos << 1) + 1;
      let leftItem = data[left];
      const right = left + 1;
      const rightItem = data[right];
      // data[right] < data[left] swap
      if (right < length && compare(rightItem, leftItem) < 0) {
        leftItem = rightItem;
        left = right;
      }
      // data[child] >= data[parent] break
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
      // data[current] >= data[parent] break
      if (compare(currentItem, parentItem) >= 0) break;
      data[pos] = parentItem;
      pos = parent;
    }
    data[pos] = currentItem;
  }
}

var nums = [3, 2, 1, 5, 6, 4],
  k = 2;
var expected = 5;
var result = findKthLargest(nums, k);
console.log(result, result === expected);

var nums = [3, 2, 3, 1, 2, 4, 5, 5, 6],
  k = 4;
var expected = 4;
var result = findKthLargest(nums, k);
console.log(result, result === expected);
