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
  const MOD = 1000000007;
  const cnt = new Array(30).fill(0);

  // Count the number of 1 bits at each position
  for (const num of nums) {
    for (let i = 0; i < 30; i++) {
      if (num & (1 << i)) {
        cnt[i]++;
      }
    }
  }

  let result = 0;
  for (let i = 0; i < k; i++) {
    let cur = 0;
    // Construct the current number from the most significant bit to the least significant bit
    for (let j = 29; j >= 0; j--) {
      if (cnt[j] > 0) {
        cur += Math.pow(2, j);
        cnt[j]--;
      }
    }

    const curBigInt = BigInt(cur);
    result = Number((BigInt(result) + curBigInt * curBigInt) % BigInt(MOD));
  }

  return result;
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
