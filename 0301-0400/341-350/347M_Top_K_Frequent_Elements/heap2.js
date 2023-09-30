// 347. Top K Frequent Elements
// https://leetcode.com/problems/top-k-frequent-elements/
// T.C.: O(k log N)
// S.C.: O(N)
class MinHeap {
  constructor(items = []) {
    this.data = items;
    this.length = items.length;
    this.comparer = (a, b) => a[1] - b[1];

    for (let i = (this.length >> 1) - 1; i >= 0; i--) {
      this._down(i);
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
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const counter = new Map();
  for (let i = 0; i < nums.length; i++) {
    const count = counter.get(nums[i]) ?? 0;
    counter.set(nums[i], count + 1);
  }

  const heap = new MinHeap();
  for (const [num, freq] of counter) {
    if (heap.length < k) {
      heap.push([num, freq]);
    } else if (freq > heap.peek().at(1)) {
      heap.pop();
      heap.push([num, freq]);
    }
  }

  return heap.data.map(([num]) => num);
};

var nums = [1, 1, 1, 2, 2, 3],
  k = 2;
var expected = [1, 2];
var result = topKFrequent(nums, k);
console.log(result, result.sort((a, b) => a - b).join() === expected.sort((a, b) => a - b).join());

var nums = [1],
  k = 1;
var expected = [1];
var result = topKFrequent(nums, k);
console.log(result, result.sort((a, b) => a - b).join() === expected.sort((a, b) => a - b).join());

var nums = [1, 2],
  k = 2;
var expected = [1, 2];
var result = topKFrequent(nums, k);
console.log(result, result.sort((a, b) => a - b).join() === expected.sort((a, b) => a - b).join());
