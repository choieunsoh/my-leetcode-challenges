// 786. K-th Smallest Prime Fraction
// https://leetcode.com/problems/k-th-smallest-prime-fraction/
// T.C.: O(n log n)
// S.C.: O(1)
const { PriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var kthSmallestPrimeFraction = function (arr, k) {
  const n = arr.length;
  const pq = new PriorityQueue((a, b) => a[0] - b[0]);
  for (let i = 0; i < n - 1; i++) {
    pq.enqueue([arr[i] / arr[n - 1], i, n - 1]);
  }

  while (!pq.isEmpty() && k > 1) {
    const [, i, j] = pq.dequeue();
    pq.enqueue([arr[i] / arr[j - 1], i, j - 1]);
    k--;
  }

  const [, i, j] = pq.dequeue();
  return [arr[i], arr[j]];
};

var arr = [1, 2, 3, 5],
  k = 3;
var expected = [2, 5];
var result = kthSmallestPrimeFraction(arr, k);
console.log(result, result.join() === expected.join());

var arr = [1, 7],
  k = 1;
var expected = [1, 7];
var result = kthSmallestPrimeFraction(arr, k);
console.log(result, result.join() === expected.join());
