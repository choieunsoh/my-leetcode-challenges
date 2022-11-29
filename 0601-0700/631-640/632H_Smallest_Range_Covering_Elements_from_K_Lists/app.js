// 632. Smallest Range Covering Elements from K Lists
// https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/
class MinHeap {
  constructor(items = []) {
    this.data = items;
    this.length = items.length;
    this.comparer = (a, b) => a[2] - b[2];
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
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function (nums) {
  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;
  const heap = new MinHeap();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i][0];
    heap.push([i, 0, num]);
    min = Math.min(min, num);
    max = Math.max(max, num);
  }

  const range = [min, max];
  while (heap.length === nums.length && heap.length > 1) {
    const [listIndex, numIndex] = heap.pop();
    const [, , currNum] = heap.peek();
    const nextIndex = numIndex + 1;
    const nextNum = nums[listIndex][nextIndex];

    min = Math.min(currNum, nextNum);
    max = Math.max(max, nextNum);
    if (range[1] - range[0] > max - min) {
      range[0] = min;
      range[1] = max;
    }

    if (nextIndex < nums[listIndex].length) {
      heap.push([listIndex, nextIndex, nextNum]);
    }
  }
  return range;
};

var nums = [
  [4, 10, 15, 24, 26],
  [0, 9, 12, 20],
  [5, 18, 22, 30],
];
var expected = [20, 24];
var result = smallestRange(nums);
console.log(result, result.join() == expected.join());

var nums = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];
var expected = [1, 1];
var result = smallestRange(nums);
console.log(result, result.join() == expected.join());

var nums = [
  [-89, 1, 69, 89, 90, 98],
  [-43, -36, -24, -14, 49, 61, 66, 69],
  [73, 94, 94, 96],
  [11, 13, 76, 79, 90],
  [-40, -20, 1, 9, 12, 12, 14],
  [-91, -31, 0, 21, 25, 26, 28, 29, 29, 30],
  [23, 88, 89],
  [31, 42, 42, 57],
  [-2, 6, 11, 12, 12, 13, 15],
  [-3, 25, 34, 36, 39],
  [-7, 3, 29, 29, 31, 32, 33],
  [4, 11, 14, 15, 15, 18, 19],
  [-34, 9, 12, 19, 19, 19, 19, 20],
  [-26, 4, 47, 53, 64, 64, 64, 64, 64, 65],
  [-51, -25, 36, 38, 50, 54],
  [17, 25, 38, 38, 38, 38, 40],
  [-30, 12, 15, 19, 19, 20, 22],
  [-14, -13, -10, 68, 69, 69, 72, 74, 75],
  [-39, 42, 70, 70, 70, 71, 72, 72, 73],
  [-67, -34, 6, 26, 28, 28, 28, 28, 29, 30, 31],
];
var expected = [13, 73];
var result = smallestRange(nums);
console.log(result, result.join() == expected.join());
