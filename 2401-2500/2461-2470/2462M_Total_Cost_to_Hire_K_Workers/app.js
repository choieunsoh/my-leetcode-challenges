// 2462. Total Cost to Hire K Workers
// https://leetcode.com/problems/total-cost-to-hire-k-workers/
class MinHeap {
  constructor(data = [], compare = (a, b) => a - b) {
    this.data = data;
    this.length = this.data.length;
    this.compare = compare;

    if (this.length > 0) {
      for (let i = (this.length >> 1) - 1; i >= 0; i--) this._down(i);
    }
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

  peek() {
    return this.data[0];
  }

  _up(pos) {
    const { data, compare } = this;
    const item = data[pos];

    while (pos > 0) {
      const parent = (pos - 1) >> 1;
      const current = data[parent];
      if (compare(item, current) >= 0) break;
      data[pos] = current;
      pos = parent;
    }

    data[pos] = item;
  }

  _down(pos) {
    const { data, compare } = this;
    const halfLength = this.length >> 1;
    const item = data[pos];

    while (pos < halfLength) {
      let left = (pos << 1) + 1;
      let best = data[left];
      const right = left + 1;

      if (right < this.length && compare(data[right], best) < 0) {
        left = right;
        best = data[right];
      }
      if (compare(best, item) >= 0) break;

      data[pos] = best;
      pos = left;
    }

    data[pos] = item;
  }
}
/**
 * @param {number[]} costs
 * @param {number} k
 * @param {number} candidates
 * @return {number}
 */
var totalCost = function (costs, k, candidates) {
  let result = 0;
  const n = costs.length;
  const leftHeap = new MinHeap([], compare);
  const rightHeap = new MinHeap([], compare);
  let left = 0;
  let right = n - 1;
  while (left <= right && candidates > 0) {
    leftHeap.push([costs[left], left]);
    if (left !== right) {
      rightHeap.push([costs[right], right]);
    }
    left++;
    right--;
    candidates--;
  }

  const MAX = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < k; i++) {
    const [leftCost, leftIndex] = leftHeap.peek() ?? [MAX, MAX];
    const [rightCost, rightIndex] = rightHeap.peek() ?? [MAX, MAX];
    const pickFromLeft = leftCost === rightCost ? leftIndex < rightIndex : leftCost < rightCost;
    if (pickFromLeft) {
      const [cost] = leftHeap.pop();
      result += cost;
      if (left <= right) {
        leftHeap.push([costs[left], left]);
        left++;
      }
    } else {
      const [cost] = rightHeap.pop();
      result += cost;
      if (left <= right) {
        rightHeap.push([costs[right], right]);
        right--;
      }
    }
  }

  return result;

  function compare(a, b) {
    return a[0] - b[0];
  }
};

var costs = [17, 12, 10, 2, 7, 2, 11, 20, 8],
  k = 3,
  candidates = 4;
var expected = 11;
var result = totalCost(costs, k, candidates);
console.log(result, result === expected);

var costs = [1, 2, 4, 1],
  k = 3,
  candidates = 3;
var expected = 4;
var result = totalCost(costs, k, candidates);
console.log(result, result === expected);

var costs = [17, 12, 10, 2, 7, 2, 11, 20, 8, 2, 1],
  k = 4,
  candidates = 4;
var expected = 7;
var result = totalCost(costs, k, candidates);
console.log(result, result === expected);

var costs = [57, 33, 26, 76, 14, 67, 24, 90, 72, 37, 30],
  k = 11,
  candidates = 2;
var expected = 526;
var result = totalCost(costs, k, candidates);
console.log(result, result === expected);
