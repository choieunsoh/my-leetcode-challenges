// 2145. Count the Hidden Sequences
// https://leetcode.com/problems/count-the-hidden-sequences/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} differences
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var numberOfArrays = function (differences, lower, upper) {
  const n = differences.length;
  let hidden = 0;
  let min = 0;
  let max = 0;
  for (let i = 0; i < n; i++) {
    hidden += differences[i];
    min = Math.min(min, hidden);
    max = Math.max(max, hidden);
    if (max - min > upper - lower) return 0;
  }

  const lowerDiff = lower - min;
  const upperDiff = upper - max;
  return upperDiff - lowerDiff + 1;
};

var differences = [1, -3, 4],
  lower = 1,
  upper = 6;
var expected = 2;
var result = numberOfArrays(differences, lower, upper);
console.log(result, result === expected);

var differences = [3, -4, 5, 1, -2],
  lower = -4,
  upper = 5;
var expected = 4;
var result = numberOfArrays(differences, lower, upper);
console.log(result, result === expected);

var differences = [4, -7, 2],
  lower = 3,
  upper = 6;
var expected = 0;
var result = numberOfArrays(differences, lower, upper);
console.log(result, result === expected);
