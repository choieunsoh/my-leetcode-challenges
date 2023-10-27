// 1619. Mean of Array After Removing Some Elements
// https://leetcode.com/problems/mean-of-array-after-removing-some-elements/
// T.C.: O(n log n)
// S.C.: O(1)
/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function (arr) {
  arr.sort((a, b) => a - b);
  const n = arr.length;
  const remove = n / 20;
  let sum = 0;
  for (let i = remove; i < n - remove; i++) {
    sum += arr[i];
  }
  const mean = sum / (n - 2 * remove);
  return Math.round(mean * 1e5) / 1e5;
};

var arr = [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3];
var expected = 2.0;
var result = trimMean(arr);
console.log(result, result === expected);

var arr = [6, 2, 7, 5, 1, 2, 0, 3, 10, 2, 5, 0, 5, 5, 0, 8, 7, 6, 8, 0];
var expected = 4.0;
var result = trimMean(arr);
console.log(result, result === expected);

var arr = [
  6, 0, 7, 0, 7, 5, 7, 8, 3, 4, 0, 7, 8, 1, 6, 8, 1, 1, 2, 4, 8, 1, 9, 5, 4, 3, 8, 5, 10, 8, 6, 6, 1, 0, 6, 10, 8, 2, 3,
  4,
];
var expected = 4.77778;
var result = trimMean(arr);
console.log(result, result === expected);
