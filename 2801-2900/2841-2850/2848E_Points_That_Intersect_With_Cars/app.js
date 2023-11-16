// 2848. Points That Intersect With Cars
// https://leetcode.com/problems/points-that-intersect-with-cars/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[][]} nums
 * @return {number}
 */
var numberOfPoints = function (nums) {
  let max = 0;
  for (const [start, end] of nums) {
    max = Math.max(max, start, end);
  }

  const counts = new Array(max + 2).fill(0);
  for (const [start, end] of nums) {
    counts[start]++;
    counts[end + 1]--;
  }

  let result = 0;
  for (let i = 1; i < counts.length; i++) {
    counts[i] += counts[i - 1];
    if (counts[i] > 0) result++;
  }
  return result;
};

var nums = [
  [3, 6],
  [1, 5],
  [4, 7],
];
var expected = 7;
var result = numberOfPoints(nums);
console.log(result, result === expected);

var nums = [
  [1, 3],
  [5, 8],
];
var expected = 7;
var result = numberOfPoints(nums);
console.log(result, result === expected);
