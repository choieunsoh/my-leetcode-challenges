// 1590. Make Sum Divisible by P
// https://leetcode.com/problems/make-sum-divisible-by-p/description/
// T.C.: O(n)
// S.C.: O(p)
/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minSubarray = function (nums, p) {
  const n = nums.length;
  let totalSum = 0;
  for (const num of nums) {
    totalSum = (totalSum + num) % p;
  }

  const target = totalSum % p;
  if (target === 0) return 0;

  const map = new Map([[0, -1]]);
  let minLength = n;
  let currentSum = 0;

  for (let i = 0; i < n; i++) {
    currentSum = (currentSum + nums[i]) % p;
    const complement = (currentSum - target + p) % p;
    if (map.has(complement)) {
      minLength = Math.min(minLength, i - map.get(complement));
    }
    map.set(currentSum, i);
  }

  return minLength === n ? -1 : minLength;
};

var nums = [3, 1, 4, 2],
  p = 6;
var expected = 1;
var result = minSubarray(nums, p);
console.log(result, result === expected);

var nums = [6, 3, 5, 2],
  p = 9;
var expected = 2;
var result = minSubarray(nums, p);
console.log(result, result === expected);

var nums = [1, 2, 3],
  p = 3;
var expected = 0;
var result = minSubarray(nums, p);
console.log(result, result === expected);

var nums = [8, 32, 31, 18, 34, 20, 21, 13, 1, 27, 23, 22, 11, 15, 30, 4, 2],
  p = 148;
var expected = 7;
var result = minSubarray(nums, p);
console.log(result, result === expected);
