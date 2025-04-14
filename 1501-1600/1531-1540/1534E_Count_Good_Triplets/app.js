// 1534. Count Good Triplets
// https://leetcode.com/problems/count-good-triplets/description/
// T.C.: O(n^3)
// S.C.: O(1)
/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function (arr, a, b, c) {
  const n = arr.length;
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        if (Math.abs(arr[i] - arr[j]) <= a && Math.abs(arr[j] - arr[k]) <= b && Math.abs(arr[i] - arr[k]) <= c) {
          count++;
        }
      }
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
