// 2542. Maximum Subsequence Score
// https://leetcode.com/problems/maximum-subsequence-score/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var maxScore = function (nums1, nums2, k) {
  const n = nums1.length;
  const pairs = nums1.map((num, i) => [num, nums2[i]]).sort((a, b) => b[1] - a[1]);
  const heap = new MinHeap();
  let topKSum = 0;
  for (let i = 0; i < k; i++) {
    const num = pairs[i][0];
    topKSum += num;
    heap.push(num);
  }

  let result = topKSum * pairs[k - 1][1];
  for (let i = k; i < n; i++) {
    const num = pairs[i][0];
    topKSum += num - heap.pop();
    heap.push(num);
    result = Math.max(result, topKSum * pairs[i][1]);
  }

  return result;
};

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

var nums1 = [1, 3, 3, 2],
  nums2 = [2, 1, 3, 4],
  k = 3;
var expected = 12;
var result = maxScore(nums1, nums2, k);
console.log(result, result === expected);

var nums1 = [4, 2, 3, 1, 1],
  nums2 = [7, 5, 10, 9, 6],
  k = 1;
var expected = 30;
var result = maxScore(nums1, nums2, k);
console.log(result, result === expected);
