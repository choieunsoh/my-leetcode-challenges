// 1523. Count Odd Numbers in an Interval Range
// https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/
var countOdds = function (low: number, high: number): number {
  const diff = (high - low) >> 1;
  return low & 1 || high & 1 ? diff + 1 : diff;
};

var low = 3,
  high = 7;
var expected = 3;
var result = countOdds(low, high);
console.log(result, result === expected);

var low = 8,
  high = 10;
var expected = 1;
var result = countOdds(low, high);
console.log(result, result === expected);

var low = 5,
  high = 5;
var expected = 1;
var result = countOdds(low, high);
console.log(result, result === expected);

var low = 4,
  high = 4;
var expected = 0;
var result = countOdds(low, high);
console.log(result, result === expected);

var low = 4,
  high = 7;
var expected = 2;
var result = countOdds(low, high);
console.log(result, result === expected);
