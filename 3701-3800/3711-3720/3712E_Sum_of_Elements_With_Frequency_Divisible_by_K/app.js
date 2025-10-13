// 3712. Sum of Elements With Frequency Divisible by K
// https://leetcode.com/problems/sum-of-elements-with-frequency-divisible-by-k/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumDivisibleByK = function (nums, k) {
  const counts = new Map();
  for (const num of nums) {
    counts.set(num, (counts.get(num) ?? 0) + 1);
  }

  let sum = 0;
  for (const [num, count] of counts) {
    if (count % k === 0) {
      sum += num * count;
    }
  }
  return sum;
};

var nums = [1, 2, 2, 3, 3, 3, 3, 4],
  k = 2;
var expected = 16;
var result = sumDivisibleByK(nums, k);
console.log(result, result === expected);

var nums = [1, 2, 3, 4, 5],
  k = 2;
var expected = 0;
var result = sumDivisibleByK(nums, k);
console.log(result, result === expected);

var nums = [4, 4, 4, 1, 2, 3],
  k = 3;
var expected = 12;
var result = sumDivisibleByK(nums, k);
console.log(result, result === expected);
