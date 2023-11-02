// 2367. Number of Arithmetic Triplets
// https://leetcode.com/problems/number-of-arithmetic-triplets/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function (nums, diff) {
  let count = 0;
  const seen = new Set();
  for (const num of nums) {
    if (seen.has(num - diff) && seen.has(num - 2 * diff)) {
      count++;
    }
    seen.add(num);
  }

  return count;
};

var nums = [0, 1, 4, 6, 7, 10],
  diff = 3;
var expected = 2;
var result = arithmeticTriplets(nums, diff);
console.log(result, result === expected);

var nums = [4, 5, 6, 7, 8, 9],
  diff = 2;
var expected = 2;
var result = arithmeticTriplets(nums, diff);
console.log(result, result === expected);

var nums = [0, 1, 7, 9],
  diff = 1;
var expected = 0;
var result = arithmeticTriplets(nums, diff);
console.log(result, result === expected);
