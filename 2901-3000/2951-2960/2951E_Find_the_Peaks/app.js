// 2951. Find the Peaks
// https://leetcode.com/problems/find-the-peaks/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} mountain
 * @return {number[]}
 */
var findPeaks = function (mountain) {
  const peaks = [];
  for (let i = 1; i < mountain.length - 1; i++) {
    if (mountain[i] > mountain[i - 1] && mountain[i] > mountain[i + 1]) {
      peaks.push(i);
    }
  }
  return peaks;
};

var mountain = [2, 4, 4];
var expected = [];
var result = findPeaks(mountain);
console.log(result, result.join() === expected.join());

var mountain = [1, 4, 3, 8, 5];
var expected = [1, 3];
var result = findPeaks(mountain);
console.log(result, result.join() === expected.join());
