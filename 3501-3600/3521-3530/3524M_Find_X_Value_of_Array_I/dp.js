// 3524. Find X Value of Array I
// https://leetcode.com/problems/find-x-value-of-array-i/description/
// T.C.: O(n * k)
// S.C.: O(k)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var resultArray = function (nums, k) {
  const n = nums.length;
  const result = new Array(k).fill(0);
  let dp = new Array(k).fill(0);

  for (let i = 0; i < n; i++) {
    const ndp = new Array(k).fill(0);

    ndp[nums[i] % k]++;

    for (let r = 0; r < k; r++) {
      ndp[(r * nums[i]) % k] += dp[r];
    }

    dp = ndp;

    for (let r = 0; r < k; r++) {
      result[r] += dp[r];
    }
  }

  return result;
};

var nums = [1, 2, 3, 4, 5],
  k = 3;
var expected = [9, 2, 4];
var result = resultArray(nums, k);
console.log(result, result.toString() === expected.toString());

var nums = [1, 2, 4, 8, 16, 32],
  k = 4;
var expected = [18, 1, 2, 0];
var result = resultArray(nums, k);
console.log(result, result.toString() === expected.toString());
