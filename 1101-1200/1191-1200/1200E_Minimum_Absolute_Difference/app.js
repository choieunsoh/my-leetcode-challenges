// 1200. Minimum Absolute Difference
// https://leetcode.com/problems/minimum-absolute-difference/
/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
  const result = [];
  let minDiff = Number.MAX_SAFE_INTEGER;
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 1; i++) {
    const a = arr[i];
    const b = arr[i + 1];
    const diff = b - a;
    if (diff < minDiff) {
      result.length = 0;
      minDiff = diff;
    }
    if (diff === minDiff) {
      result.push([a, b]);
    }
  }
  return result;
};

var arr = [4, 2, 1, 3];
var expected = [
  [1, 2],
  [2, 3],
  [3, 4],
];
var result = minimumAbsDifference(arr);
console.log(result, result.join() === expected.join());

var arr = [1, 3, 6, 10, 15];
var expected = [[1, 3]];
var result = minimumAbsDifference(arr);
console.log(result, result.join() === expected.join());

var arr = [3, 8, -10, 23, 19, -4, -14, 27];
var expected = [
  [-14, -10],
  [19, 23],
  [23, 27],
];
var result = minimumAbsDifference(arr);
console.log(result, result.join() === expected.join());
