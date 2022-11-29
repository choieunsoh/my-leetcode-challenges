// 480. Sliding Window Median
// https://leetcode.com/problems/sliding-window-median/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var medianSlidingWindow = function (nums, k) {
  const window = new Window();
  for (let i = 0; i < k - 1; i++) window.add(nums[i]);
  let res = [];
  for (let i = k - 1; i < nums.length; i++) {
    window.add(nums[i]);
    res.push(window.median());
    window.remove(nums[i - k + 1]);
  }
  return res;
};

class Window {
  constructor() {
    this.minHeap = new Heap((a, b) => a < b);
    this.maxHeap = new Heap((a, b) => a > b);
  }

  add(value) {
    this.heap(value).add(value);
    this.balance();
  }

  remove(value) {
    this.heap(value).remove(value);
    this.balance();
  }

  median() {
    if (this.minHeap.size() === this.maxHeap.size()) {
      return (this.minHeap.peak() + this.maxHeap.peak()) / 2;
    }
    return this.minHeap.peak();
  }

  heap(value) {
    return BigInt(value) < this.median() ? this.maxHeap : this.minHeap;
  }

  balance() {
    const diff = this.maxHeap.size() - this.minHeap.size();
    if (diff > 0) this.minHeap.add(this.maxHeap.pop());
    else if (diff < -1) this.maxHeap.add(this.minHeap.pop());
  }
}

class Heap {
  constructor(comparer) {
    this.data = [];
    this.comparer = comparer;
  }

  peak() {
    return this.data[0] || 0;
  }

  size() {
    return this.data.length;
  }

  isEmpty() {
    return this.data.length === 0;
  }

  add(value) {
    this.data.push(value);
    this._up(this.data.length - 1);
  }

  remove(value) {
    const idx = this.data.indexOf(value);
    if (idx === this.data.length - 1) return this.data.pop();
    this.data[idx] = this.data.pop();
    this._down(this._up(idx));
  }

  pop() {
    if (this.data.length < 2) return this.data.pop();
    const result = this.data[0];
    this.data[0] = this.data.pop();
    this._down(0);
    return result;
  }

  _down(parent) {
    const { data, comparer } = this;
    let child = (parent << 1) + 1;
    const right = child + 1;
    if (right && comparer(data[right], data[child])) {
      child = right;
    }
    if (child && comparer(data[child], data[parent])) {
      this._swap(child, parent);
      return this._down(child);
    }
    return parent;
  }

  _up(child) {
    const { data, comparer } = this;
    const parent = (child - 1) >> 1;
    if (child && comparer(data[child], data[parent])) {
      this._swap(child, parent);
      return this._up(parent);
    }
    return child;
  }
  _swap(a, b) {
    [this.data[a], this.data[b]] = [this.data[b], this.data[a]];
  }
}

var nums = [1, 3, -1, -3, 5, 3, 6, 7],
  k = 3;
var expected = [1.0, -1.0, -1.0, 3.0, 5.0, 6.0];
var result = medianSlidingWindow(nums, k);
console.log(result, result.join() == expected.join());

var nums = [1, 2, 3, 4, 2, 3, 1, 4, 2],
  k = 3;
var expected = [2.0, 3.0, 3.0, 3.0, 2.0, 3.0, 2.0];
var result = medianSlidingWindow(nums, k);
console.log(result, result.join() == expected.join());
