// 905. Sort Array By Parity
// https://leetcode.com/problems/sort-array-by-parity/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  if (nums.length === 1) return nums;

  const n = nums.length;
  let even = 0;
  while (even < n && nums[even] % 2 === 0) {
    even++;
  }

  for (let i = even + 1; i < nums.length; i++) {
    if (nums[i] % 2 === 1) continue;

    [nums[even], nums[i]] = [nums[i], nums[even]];
    even++;
  }

  return nums;
};

var nums = [3, 1, 2, 4];
var expected = [2, 4, 3, 1];
var result = sortArrayByParity(nums);
console.log(result, result.join() === expected.join());

var nums = [0];
var expected = [0];
var result = sortArrayByParity(nums);
console.log(result, result.join() === expected.join());

var nums = [0, 1, 2];
var expected = [0, 2, 1];
var result = sortArrayByParity(nums);
console.log(result, result.join() === expected.join());

var nums = [0, 2, 1, 4];
var expected = [0, 2, 4, 1];
var result = sortArrayByParity(nums);
console.log(result, result.join() === expected.join());
