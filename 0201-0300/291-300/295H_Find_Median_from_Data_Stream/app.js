// 295. Find Median from Data Stream
// https://leetcode.com/problems/find-median-from-data-stream/
class Heap {
  constructor(items = [], comparer = (a, b) => a - b) {
    this.data = items;
    this.length = items.length;
    this.comparer = comparer;
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
    const top = this.peek();
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
    const item = data[pos];
    const halfLength = this.length >> 1;
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

class MedianFinder {
  constructor() {
    this.minHeap = new Heap();
    this.maxHeap = new Heap([], (a, b) => b - a);
  }
  addNum(num) {
    if (this.minHeap.length === 0 || num < this.minHeap.peek()) {
      this.maxHeap.push(num);
    } else {
      this.minHeap.push(num);
    }
    this._balance();
  }
  findMedian() {
    if (this.minHeap.length === this.maxHeap.length) {
      return (this.minHeap.peek() + this.maxHeap.peek()) / 2;
    } else {
      return this.maxHeap.peek();
    }
  }
  _balance() {
    if (this.maxHeap.length < this.minHeap.length) {
      const num = this.minHeap.pop();
      this.maxHeap.push(num);
    }
    if (this.maxHeap.length > this.minHeap.length + 1) {
      const num = this.maxHeap.pop();
      this.minHeap.push(num);
    }
  }
}

const medianFinder = new MedianFinder();
medianFinder.addNum(1); // arr = [1]
medianFinder.addNum(2); // arr = [1, 2]
console.log(medianFinder.findMedian()); // return 1.5 (i.e., (1 + 2) / 2)
medianFinder.addNum(3); // arr[1, 2, 3]
console.log(medianFinder.findMedian()); // return 2.0
