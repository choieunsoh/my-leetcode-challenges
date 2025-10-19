// 3718. Smallest Missing Multiple of K
// https://leetcode.com/problems/smallest-missing-multiple-of-k/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingMultiple = function (nums, k) {
  const seen = new Set(nums);
  for (let num = k; num <= 200; num += k) {
    if (!seen.has(num)) {
      return num;
    }
  }
  return 0;
};

var nums = [8, 2, 3, 4, 6],
  k = 2;
var expected = 10;
var result = missingMultiple(nums, k);
console.log(result, result === expected);

var nums = [1, 4, 7, 10, 15],
  k = 5;
var expected = 5;
var result = missingMultiple(nums, k);
console.log(result, result === expected);

var nums = [42, 13, 99, 13, 71, 32, 64, 32, 63, 44, 6, 22, 8, 2, 55, 88, 43, 40, 71, 80, 95, 32, 46, 19],
  k = 44;
var expected = 132;
var result = missingMultiple(nums, k);
console.log(result, result === expected);
