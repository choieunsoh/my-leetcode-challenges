// 3314. Construct the Minimum Bitwise Array I
// https://leetcode.com/problems/construct-the-minimum-bitwise-array-i/description/
// T.C.: O(n log m)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minBitwiseArray = function (nums) {
  const n = nums.length;
  const result = new Array(n);
  for (let i = 0; i < n; i++) {
    const num = nums[i];

    // For num=2, no solution exists as `val | (val+1)` is always odd for val >= 0.
    if (num === 2) {
      result[i] = -1;
      continue;
    }

    // A solution `val | (val+1) = num` implies `val = num - 2^k` for some k.
    // This is because `val | (val+1)` is equivalent to `val` plus its lowest power of 2 complement.
    // Instead of searching all `val` up to `num`, we can search for `k`.
    let minVal = -1;

    // Iterate through possible values of k. The loop limit is log2(num) since val must be non-negative.
    for (let k = 0; 1 << k <= num; k++) {
      const powerOf2 = 1 << k;
      const val = num - powerOf2;

      // We must verify that this `val` is a valid solution.
      // A `val` is valid if `val | (val+1)` forms `num`. This occurs if `val+1` has exactly `k` trailing zeros.
      if ((val + 1) % (powerOf2 * 2) === powerOf2) {
        if (minVal === -1 || val < minVal) {
          minVal = val;
        }
      }
    }
    result[i] = minVal;
  }
  return result;
};

var nums = [2, 3, 5, 7];
var expected = [-1, 1, 4, 3];
var result = minBitwiseArray(nums);
console.log(result, result.join() === expected.join());

var nums = [11, 13, 31];
var expected = [9, 12, 15];
var result = minBitwiseArray(nums);
console.log(result, result.join() === expected.join());
