// 3468. Find the Number of Copy Arrays
// https://leetcode.com/problems/find-the-number-of-copy-arrays/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} original
 * @param {number[][]} bounds
 * @return {number}
 */
var countArrays = function (original, bounds) {
  let [lowerBound, upperBound] = bounds[0];
  let result = upperBound - lowerBound + 1;
  for (let i = 1; i < original.length; ++i) {
    const diff = original[i] - original[i - 1];
    lowerBound = Math.max(lowerBound + diff, bounds[i][0]);
    upperBound = Math.min(upperBound + diff, bounds[i][1]);
    result = Math.min(result, upperBound - lowerBound + 1);
  }
  return Math.max(0, result);
};

var original = [1, 2, 3, 4],
  bounds = [
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
  ];
var expected = 2;
var result = countArrays(original, bounds);
console.log(result, result === expected);

var original = [1, 2, 3, 4],
  bounds = [
    [1, 10],
    [2, 9],
    [3, 8],
    [4, 7],
  ];
var expected = 4;
var result = countArrays(original, bounds);
console.log(result, result === expected);

var original = [1, 2, 1, 2],
  bounds = [
    [1, 1],
    [2, 3],
    [3, 3],
    [2, 3],
  ];
var expected = 0;
var result = countArrays(original, bounds);
console.log(result, result === expected);

var original = [1, 5, 3, 7, 5],
  bounds = [
    [-100, 100],
    [-100, 100],
    [-100, 100],
    [-100, 100],
    [-100, 100],
  ];
var expected = 195;
var result = countArrays(original, bounds);
console.log(result, result === expected);
