// 632. Smallest Range Covering Elements from K Lists
// https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function (nums) {
  const merged = [];
  for (let i = 0; i < nums.length; i++) {
    for (const num of nums[i]) {
      merged.push([num, i]);
    }
  }
  merged.sort((a, b) => a[0] - b[0]);

  const freq = new Map();
  let left = 0;
  let count = 0;
  let rangeStart = 0;
  let rangeEnd = Number.MAX_SAFE_INTEGER;
  for (let right = 0; right < merged.length; right++) {
    const [rightNum, rightIndex] = merged[right];
    freq.set(rightIndex, (freq.get(rightIndex) ?? 0) + 1);
    if (freq.get(rightIndex) === 1) count++;

    while (count === nums.length) {
      const [leftNum, leftIndex] = merged[left];
      const currRange = rightNum - leftNum;
      if (currRange < rangeEnd - rangeStart) {
        rangeStart = leftNum;
        rangeEnd = rightNum;
      }

      freq.set(leftIndex, freq.get(leftIndex) - 1);
      if (freq.get(leftIndex) === 0) count--;

      left++;
    }
  }

  return [rangeStart, rangeEnd];
};

var nums = [
  [4, 10, 15, 24, 26],
  [0, 9, 12, 20],
  [5, 18, 22, 30],
];
var expected = [20, 24];
var result = smallestRange(nums);
console.log(result, result.join() == expected.join());

var nums = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];
var expected = [1, 1];
var result = smallestRange(nums);
console.log(result, result.join() == expected.join());

var nums = [
  [-89, 1, 69, 89, 90, 98],
  [-43, -36, -24, -14, 49, 61, 66, 69],
  [73, 94, 94, 96],
  [11, 13, 76, 79, 90],
  [-40, -20, 1, 9, 12, 12, 14],
  [-91, -31, 0, 21, 25, 26, 28, 29, 29, 30],
  [23, 88, 89],
  [31, 42, 42, 57],
  [-2, 6, 11, 12, 12, 13, 15],
  [-3, 25, 34, 36, 39],
  [-7, 3, 29, 29, 31, 32, 33],
  [4, 11, 14, 15, 15, 18, 19],
  [-34, 9, 12, 19, 19, 19, 19, 20],
  [-26, 4, 47, 53, 64, 64, 64, 64, 64, 65],
  [-51, -25, 36, 38, 50, 54],
  [17, 25, 38, 38, 38, 38, 40],
  [-30, 12, 15, 19, 19, 20, 22],
  [-14, -13, -10, 68, 69, 69, 72, 74, 75],
  [-39, 42, 70, 70, 70, 71, 72, 72, 73],
  [-67, -34, 6, 26, 28, 28, 28, 28, 29, 30, 31],
];
var expected = [13, 73];
var result = smallestRange(nums);
console.log(result, result.join() == expected.join());
