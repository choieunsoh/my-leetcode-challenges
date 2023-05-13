// 502. IPO
// https://leetcode.com/problems/ipo/
/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
var findMaximizedCapital = function (k, w, profits, capital) {
  const n = profits.length;
  const projects = new Array(n);
  for (let i = 0; i < n; i++) {
    projects[i] = [capital[i], profits[i]];
  }
  projects.sort((a, b) => a[0] - b[0]);

  const heap = new MaxHeap();
  let index = 0;
  let maxCapital = w;
  for (let i = 0; i < k; i++) {
    while (index < n && projects[index][0] <= maxCapital) {
      heap.push(projects[index++][1]);
    }
    if (heap.length === 0) break;
    maxCapital += heap.pop();
  }
  return maxCapital;
};

class MaxHeap {
  constructor(data = [], compare = (a, b) => b - a) {
    this.data = data;
    this.length = data.length;
    this.compare = compare;
    if (this.length > 0) {
      for (let i = (this.length >> 1) - 1; i > -1; i--) {
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
    if (!this.length) return undefined;
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

var k = 2,
  w = 0,
  profits = [1, 2, 3],
  capital = [0, 1, 1];
var expected = 4;
var result = findMaximizedCapital(k, w, profits, capital);
console.log(result, result === expected);

var k = 3,
  w = 0,
  profits = [1, 2, 3],
  capital = [0, 1, 2];
var expected = 6;
var result = findMaximizedCapital(k, w, profits, capital);
console.log(result, result === expected);
