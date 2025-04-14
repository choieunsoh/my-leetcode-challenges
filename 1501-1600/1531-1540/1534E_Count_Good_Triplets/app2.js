// 1534. Count Good Triplets
// https://leetcode.com/problems/count-good-triplets/description/
// T.C.: O(n^2 + m*n)
// S.C.: O(m)
/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function (arr, a, b, c) {
  const n = arr.length;
  const sum = new Array(1001).fill(0);
  let count = 0;
  for (let j = 0; j < n; ++j) {
    for (let k = j + 1; k < n; ++k) {
      if (Math.abs(arr[j] - arr[k]) <= b) {
        const lj = arr[j] - a;
        const rj = arr[j] + a;
        const lk = arr[k] - c;
        const rk = arr[k] + c;
        const l = Math.max(0, lj, lk);
        const r = Math.min(1000, rj, rk);
        if (l <= r) {
          if (l === 0) {
            count += sum[r];
          } else {
            count += sum[r] - sum[l - 1];
          }
        }
      }
    }
    for (let k = arr[j]; k <= 1000; ++k) {
      sum[k] += 1;
    }
  }
  return count;
};

var arr = [3, 0, 1, 1, 9, 7],
  a = 7,
  b = 2,
  c = 3;
var expected = 4;
var result = countGoodTriplets(arr, a, b, c);
console.log(result, result === expected);

var arr = [1, 1, 2, 2, 3],
  a = 0,
  b = 0,
  c = 1;
var expected = 0;
var result = countGoodTriplets(arr, a, b, c);
console.log(result, result === expected);
