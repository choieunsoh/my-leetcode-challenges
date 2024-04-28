// 2055. Plates Between Candles
// https://leetcode.com/problems/plates-between-candles/description/
// T.C.: O(N * QlogN)
// S.C.: O(N + Q)
/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
var platesBetweenCandles = function (s, queries) {
  const candles = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '|') candles.push(i);
  }

  const result = [];
  for (const [begin, end] of queries) {
    let leftIndex = -1;
    let rightIndex = -1;
    let left = 0;
    let right = candles.length - 1;
    while (left <= right) {
      const mid = (left + right) >> 1;
      if (candles[mid] >= begin) {
        right = mid - 1;
        leftIndex = mid;
      } else {
        left = mid + 1;
      }
    }

    left = 0;
    right = candles.length - 1;
    while (left <= right) {
      const mid = (left + right) >> 1;
      if (candles[mid] <= end) {
        left = mid + 1;
        rightIndex = mid;
      } else {
        right = mid - 1;
      }
    }

    if (leftIndex === -1 || rightIndex === -1 || rightIndex < leftIndex) {
      result.push(0);
    } else {
      const candleAndPlateCount = candles[rightIndex] - candles[leftIndex] + 1;
      const candleCount = rightIndex - leftIndex + 1;
      const plateCount = candleAndPlateCount - candleCount;
      result.push(plateCount);
    }
  }
  return result;
};

var s = '**|**|***|',
  queries = [
    [2, 5],
    [5, 9],
    [2, 9],
  ];
var expected = [2, 3, 5];
var result = platesBetweenCandles(s, queries);
console.log(result, result.join() === expected.join());

var s = '***|**|*****|**||**|*',
  queries = [
    [1, 17],
    [4, 5],
    [14, 17],
    [5, 11],
    [15, 16],
  ];
var expected = [9, 0, 0, 0, 0];
var result = platesBetweenCandles(s, queries);
console.log(result, result.join() === expected.join());
