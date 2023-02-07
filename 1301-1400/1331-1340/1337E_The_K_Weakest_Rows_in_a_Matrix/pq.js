// 1337. The K Weakest Rows in a Matrix
// https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/
const { PriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
  const result = [];
  const pq = new PriorityQueue((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));
  for (let row = 0; row < mat.length; row++) {
    const ones = countOnes(mat[row]);
    pq.enqueue([ones, row]);
  }

  while (result.length < k) {
    const [, row] = pq.dequeue();
    result.push(row);
  }

  function countOnes(nums) {
    let left = 0;
    let right = nums.length;
    let count = right;
    while (left <= right) {
      const mid = (left + right) >> 1;
      if (nums[mid] === 1) {
        count = mid + 1;
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return count;
  }

  return result;
};

var mat = [
    [1, 1, 0, 0, 0],
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [1, 1, 1, 1, 1],
  ],
  k = 3;
var expected = [2, 0, 3];
var result = kWeakestRows(mat, k);
console.log(result, result.join() === expected.join());

var mat = [
    [1, 0, 0, 0],
    [1, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
  ],
  k = 2;
var expected = [0, 2];
var result = kWeakestRows(mat, k);
console.log(result, result.join() === expected.join());
