// 2897. Apply Operations on Array to Maximize Sum of Squares
// https://leetcode.com/problems/apply-operations-on-array-to-maximize-sum-of-squares/description/
// T.C.: O(n log M)
// S.C.: O(log M)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSum = function (nums, k) {
  const bitCount = new Array(31).fill(0);

  // Count occurrences of every bit
  for (const num of nums) {
    for (let bit = 0; bit < 31; bit++) {
      if ((num & (1 << bit)) !== 0) {
        bitCount[bit]++;
      }
    }
  }

  let answer = 0n;
  const MOD_BIG = 1000000007n;

  // Build k maximum possible numbers
  for (let i = 0; i < k; i++) {
    let value = 0n;

    for (let bit = 0; bit < 31; bit++) {
      if (bitCount[bit] > 0) {
        value |= 1n << BigInt(bit);
        bitCount[bit]--;
      }
    }

    answer = (answer + value * value) % MOD_BIG;
  }

  return Number(answer);
};

var nums = [2, 6, 5, 8],
  k = 2;
var expected = 261;
var result = maxSum(nums, k);
console.log(result, result === expected);

var nums = [4, 5, 4, 7],
  k = 3;
var expected = 90;
var result = maxSum(nums, k);
console.log(result, result === expected);
