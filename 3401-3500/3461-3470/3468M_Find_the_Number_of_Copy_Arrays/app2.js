// 3468. Find the Number of Copy Arrays
// https://leetcode.com/problems/find-the-number-of-copy-arrays/description/
// T.C.: O(m*n)
// S.C.: O(n)
/**
 * @param {number[]} original
 * @param {number[][]} bounds
 * @return {number}
 */
var countArrays = function (original, bounds) {
  const n = original.length;
  const diffs = [];
  for (let i = 1; i < n; i++) {
    diffs.push(original[i] - original[i - 1]);
  }

  let count = 0;
  for (let start = bounds[0][0]; start <= bounds[0][1]; start++) {
    let possible = true;
    const copy = [start];
    for (let i = 0; i < diffs.length; i++) {
      const next = copy[i] + diffs[i];
      if (next < bounds[i + 1][0] || next > bounds[i + 1][1]) {
        possible = false;
        break;
      }
      copy.push(next);
    }
    if (possible) {
      count++;
    }
  }

  return count;
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
