// 3942. Minimum Operations to Sort a Permutation
// https://leetcode.com/problems/minimum-operations-to-sort-a-permutation/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  const n = nums.length;
  if (n === 1) {
    return 0;
  }

  const start = nums.indexOf(0);

  let asc = true;
  let desc = true;

  for (let i = 1; i < n; i++) {
    const value = nums[(start + i) % n];

    if (value !== i) {
      asc = false;
    }
    if (value !== n - i) {
      desc = false;
    }

    if (!asc && !desc) {
      return -1;
    }
  }

  if (asc) {
    return Math.min(start, n - start + 2);
  }

  return Math.min(n - start, start + 2);
};

var nums = [0, 2, 1];
var expected = 2;
var result = minOperations(nums);
console.log(result, result === expected);

var nums = [1, 0, 2];
var expected = 2;
var result = minOperations(nums);
console.log(result, result === expected);

var nums = [2, 0, 1, 3];
var expected = -1;
var result = minOperations(nums);
console.log(result, result === expected);
