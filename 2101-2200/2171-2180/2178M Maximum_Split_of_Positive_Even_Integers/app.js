// 2178. Maximum Split of Positive Even Integers
// https://leetcode.com/problems/maximum-split-of-positive-even-integers/description/
// T.C.: O(sqrt(n))
// S.C.: O(sqrt(n))
/**
 * @param {number} finalSum
 * @return {number[]}
 */
var maximumEvenSplit = function (finalSum) {
  if (finalSum % 2) return [];

  const nums = new Set();
  let num = 2;
  let sum = 0;
  while (sum < finalSum) {
    nums.add(num);
    sum += num;
    num += 2;
  }
  nums.delete(sum - finalSum);
  return [...nums];
};

var finalSum = 12;
var expected = [2, 4, 6];
var result = maximumEvenSplit(finalSum);
console.log(result, result.join() === expected.join());

var finalSum = 7;
var expected = [];
var result = maximumEvenSplit(finalSum);
console.log(result, result.join() === expected.join());

var finalSum = 28;
var expected = [4, 6, 8, 10];
var result = maximumEvenSplit(finalSum);
console.log(result, result.join() === expected.join());

var finalSum = 950;
var expected = [
  2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62,
];
var result = maximumEvenSplit(finalSum);
console.log(result, result.join() === expected.join());
