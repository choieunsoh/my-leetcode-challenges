// 2055. Plates Between Candles
// https://leetcode.com/problems/plates-between-candles/description/
// T.C.: O(N + Q)
// S.C.: O(N + Q)
/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
var platesBetweenCandles = function (s, queries) {
  const n = s.length;
  const candleCount = new Array(n).fill(0);
  const nearestLeftCandle = new Array(n).fill(-1);
  const nearestRightCandle = new Array(n).fill(n);

  let leftCandleIndex = -1;
  let rightCandleIndex = -1;
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === '|') {
      leftCandleIndex = i;
      count++;
    }
    nearestLeftCandle[i] = leftCandleIndex;
    candleCount[i] = count;
  }
  for (let i = n - 1; i >= 0; i--) {
    if (s.charAt(i) === '|') {
      rightCandleIndex = i;
    }
    nearestRightCandle[i] = rightCandleIndex;
  }

  const result = new Array(queries.length).fill(0);
  for (let i = 0; i < queries.length; i++) {
    const [left, right] = queries[i];
    const leftCandleIndex = nearestRightCandle[left];
    const rightCandleIndex = nearestLeftCandle[right];
    if (leftCandleIndex === -1 || rightCandleIndex === -1 || rightCandleIndex < leftCandleIndex) {
      continue;
    }

    const platesAndCandles = rightCandleIndex - leftCandleIndex + 1;
    const candles = candleCount[rightCandleIndex] - candleCount[leftCandleIndex] + 1;
    const plates = platesAndCandles - candles;
    result[i] = plates;
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
