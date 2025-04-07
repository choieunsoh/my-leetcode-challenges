// 3510. Minimum Pair Removal to Sort Array II
// https://leetcode.com/problems/minimum-pair-removal-to-sort-array-ii/description/
// T.C.: O(n log n)
// S.C.: O(n)
const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

class LazyHeap {
  constructor() {
    this.que = new MinPriorityQueue((x) => x[0]);
    this.del = new MinPriorityQueue((x) => x[0]);
  }

  push(val) {
    this.que.enqueue(val);
  }

  pop(val) {
    this.del.enqueue(val);
  }

  top() {
    const { que, del } = this;
    while (!que.isEmpty() && !del.isEmpty() && que.front()[0] === del.front()[0] && que.front()[1] === del.front()[1]) {
      que.dequeue();
      del.dequeue();
    }
    return que.front();
  }

  size() {
    return this.que.size() - this.del.size();
  }

  isEmpty() {
    return this.size() === 0;
  }
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumPairRemoval = function (nums) {
  const n = nums.length;
  const a = new Array(n + 10).fill(0);
  for (let i = 1; i <= n; i++) {
    a[i] = nums[i - 1];
  }

  // Initialize Path Compression
  const f = new Array(n + 10).fill(0);
  const g = new Array(n + 10).fill(0);
  for (let i = 0; i <= n + 1; i++) {
    f[i] = i;
    g[i] = i;
  }

  const findNext = (i) => {
    if (f[i] === i) return i;
    f[i] = findNext(f[i]);
    return f[i];
  };

  const findPrev = (i) => {
    if (g[i] === i) return i;
    g[i] = findPrev(g[i]);
    return g[i];
  };

  const unionNext = (i) => {
    f[i] = findNext(i + 1);
  };

  const unionPrev = (i) => {
    g[i] = findPrev(i - 1);
  };

  // Initialize LazyHeap
  const heap = new LazyHeap();

  let notSortedCount = 0;
  for (let i = 1; i < n; i++) {
    heap.push([a[i] + a[i + 1], i]);
    notSortedCount += a[i] > a[i + 1] ? 1 : 0;
  }

  let operations = 0;
  while (notSortedCount > 0) {
    operations++;

    const val = heap.top();
    heap.pop(val);
    const i = val[1];
    const u = findPrev(i - 1);
    const j = findNext(i + 1);
    const v = findNext(j + 1);

    notSortedCount -= a[i] > a[j] ? 1 : 0;
    if (1 <= u) {
      heap.pop([a[u] + a[i], u]);
      notSortedCount -= a[u] > a[i] ? 1 : 0;
    }
    if (v <= n) {
      heap.pop([a[j] + a[v], j]);
      notSortedCount -= a[j] > a[v] ? 1 : 0;
    }

    a[i] += a[j];
    unionNext(j);
    unionPrev(j);

    if (1 <= u) {
      heap.push([a[u] + a[i], u]);
      notSortedCount += a[u] > a[i] ? 1 : 0;
    }
    if (v <= n) {
      heap.push([a[i] + a[v], i]);
      notSortedCount += a[i] > a[v] ? 1 : 0;
    }
  }

  return operations;
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
