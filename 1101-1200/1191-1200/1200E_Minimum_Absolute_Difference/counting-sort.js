// 1200. Minimum Absolute Difference
// https://leetcode.com/problems/minimum-absolute-difference/
/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
  let minElement = arr[0];
  let maxElement = arr[0];
  for (const num of arr) {
    minElement = Math.min(minElement, num);
    maxElement = Math.max(maxElement, num);
  }

  const shift = -minElement;
  const counting = new Array(maxElement - minElement + 1).fill(0);
  const result = [];
  for (const num of arr) {
    counting[num + shift] = 1;
  }

  let minPairDiff = maxElement - minElement;
  let prev = 0;
  for (let curr = 1; curr <= maxElement + shift; curr++) {
    if (counting[curr] === 0) {
      continue;
    }

    if (curr - prev === minPairDiff) {
      result.push([prev - shift, curr - shift]);
    } else if (curr - prev < minPairDiff) {
      result.length = 0;
      minPairDiff = curr - prev;
      result.push([prev - shift, curr - shift]);
    }

    prev = curr;
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
