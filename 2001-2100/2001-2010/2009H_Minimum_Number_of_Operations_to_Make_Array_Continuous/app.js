// 2009. Minimum Number of Operations to Make Array Continuous
// https://leetcode.com/problems/minimum-number-of-operations-to-make-array-continuous/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  const n = nums.length;
  const unique = new Set(nums);
  const newNums = Array.from(unique);
  newNums.sort((a, b) => a - b);

  let result = n;
  for (let i = 0, j = 0; i < newNums.length; i++) {
    while (j < newNums.length && newNums[j] < newNums[i] + n) {
      j++;
    }
    const count = j - i;
    result = Math.min(result, n - count);
  }

  return result;
};

var nums = [4, 2, 5, 3];
var expected = 0;
var result = minOperations(nums);
console.log(result, result === expected);

var nums = [1, 2, 3, 5, 6];
var expected = 1;
var result = minOperations(nums);
console.log(result, result === expected);

var nums = [1, 10, 100, 1000];
var expected = 3;
var result = minOperations(nums);
console.log(result, result === expected);
