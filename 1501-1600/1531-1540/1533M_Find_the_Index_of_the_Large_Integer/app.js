// 1533. Find the Index of the Large Integer
// https://leetcode.com/problems/find-the-index-of-the-large-integer/description/
// T.C.: O(log n)
// S.C.: O(1)
/**
 * // This is the ArrayReader's API interface.
 * // You should not implement it, or speculate about its implementation
 * function ArrayReader() {
 *     // Compares the sum of arr[l..r] with the sum of arr[x..y]
 *     // return 1 if sum(arr[l..r]) > sum(arr[x..y])
 *     // return 0 if sum(arr[l..r]) == sum(arr[x..y])
 *     // return -1 if sum(arr[l..r]) < sum(arr[x..y])
 *     @param {number} l, r, x, y
 *     @return {number}
 *     this.compareSub = function(l, r, x, y) {
 *         ...
 *     };
 *
 *     // Returns the length of the array
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */
function ArrayReader(arr) {
  this.arr = arr;
  this.prefixSum = new Array(arr.length).fill(0);
  this.prefixSum[0] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    this.prefixSum[i] = this.prefixSum[i - 1] + arr[i];
  }

  this.length = function () {
    return arr.length;
  };

  this.compareSub = function (l, r, x, y) {
    const arr = this.prefixSum;
    const lSum = l > 0 ? arr[l - 1] : 0;
    const rSum = arr[r];
    const xSum = x > 0 ? arr[x - 1] : 0;
    const ySum = arr[y];
    const lrSum = rSum - lSum;
    const xySum = ySum - xSum;

    if (lrSum > xySum) {
      return 1;
    } else if (lrSum < xySum) {
      return -1;
    } else {
      return 0;
    }
  };
}

/**
 * @param {ArrayReader} reader
 * @return {number}
 */
var getIndex = function (reader) {
  const n = reader.length();
  let left = 0;
  let right = n - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const odd = (right - left) % 2;
    const compare = reader.compareSub(left, mid, mid + odd, right);
    if (compare === 0) {
      return mid;
    } else if (compare === 1) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

var nums = [7, 7, 7, 7, 10, 7, 7, 7];
var reader = new ArrayReader(nums);
var expected = 4;
var result = getIndex(reader);
console.log(result, result === expected);

var nums = [6, 6, 12];
var reader = new ArrayReader(nums);
var expected = 2;
var result = getIndex(reader);
console.log(result, result === expected);

var nums = [1, 2, 1, 1, 1, 1, 1, 1, 1];
var reader = new ArrayReader(nums);
var expected = 1;
var result = getIndex(reader);
console.log(result, result === expected);
