// 1200. Minimum Absolute Difference
// https://leetcode.com/problems/minimum-absolute-difference/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
  // Sort the original array
  arr.sort((x, y) => x - y);
  let answer = [];

  // Initialize minimum difference as a huge integer in order not
  // to miss the absolute difference of the first pair.
  let minPairDiff = Infinity;

  // Traverse the sorted array and calcalute the minimum absolute difference.
  for (let i = 0; i < arr.length - 1; ++i) {
    minPairDiff = Math.min(minPairDiff, arr[i + 1] - arr[i]);
  }

  // Traverse the sorted array and check every pair again, if
  // the absolute difference equals the minimum difference,
  // add this pair to the answer list.
  for (let i = 0; i < arr.length - 1; ++i) {
    if (arr[i + 1] - arr[i] == minPairDiff) {
      answer.push([arr[i], arr[i + 1]]);
    }
  }

  return answer;
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
