// 370. Range Addition
// https://leetcode.com/problems/range-addition/description/
// T.C.: O(n+m)
// S.C.: O(1)
/**
 * @param {number} length
 * @param {number[][]} updates
 * @return {number[]}
 */
var getModifiedArray = function (length, updates) {
  const result = new Array(length).fill(0);
  for (const [start, end, inc] of updates) {
    result[start] += inc;
    if (end + 1 < length) {
      result[end + 1] -= inc;
    }
  }

  for (let i = 1; i < length; i++) {
    result[i] += result[i - 1];
  }
  return result;
};

var length = 5,
  updates = [
    [1, 3, 2],
    [2, 4, 3],
    [0, 2, -2],
  ];
var expected = [-2, 0, 3, 5, 3];
var result = getModifiedArray(length, updates);
console.log(result, result.join() === expected.join());

var length = 10,
  updates = [
    [2, 4, 6],
    [5, 6, 8],
    [1, 9, -4],
  ];
var expected = [0, -4, 2, 2, 2, 4, 4, -4, -4, -4];
var result = getModifiedArray(length, updates);
console.log(result, result.join() === expected.join());
