// 3444. Minimum Increments for Target Multiples in an Array
// https://leetcode.com/problems/minimum-increments-for-target-multiples-in-an-array/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @param {number[]} target
 * @return {number}
 */
var minimumIncrements = function (nums, target) {
  // We'll treat all target elements as distinct (even if values repeat).
  // Use a bitmask DP approach with up to 2^n states (n <= 4).

  const n = target.length;

  // Precompute LCMs for all subsets of target.
  const maxMask = 1 << n;
  const lcms = new Array(maxMask).fill(1);
  for (let mask = 1; mask < maxMask; mask++) {
    let val = 1;
    for (let i = 0; i < n; i++) {
      if (mask & (1 << i)) {
        val = lcm(val, target[i]);
      }
    }
    lcms[mask] = val;
  }

  // DP array, dp[mask] = min cost to cover 'mask' of targets.
  const dp = new Array(maxMask).fill(Infinity);
  dp[0] = 0;

  // For each num in nums, try to update the DP.
  for (let i = 0; i < nums.length; i++) {
    const x = nums[i];
    // Precompute cost to form a multiple of each LCM subset from x.
    const costForI = new Array(maxMask).fill(0);
    for (let sub = 1; sub < maxMask; sub++) {
      const need = lcms[sub];
      const times = Math.ceil(x / need);
      costForI[sub] = times * need - x;
    }

    // Build the next DP array from current dp.
    const nextDP = dp.slice();
    for (let mask = 0; mask < maxMask; mask++) {
      const base = dp[mask];
      if (base === Infinity) continue;
      for (let sub = 1; sub < maxMask; sub++) {
        const newMask = mask | sub;
        const c = costForI[sub];
        if (base + c < nextDP[newMask]) {
          nextDP[newMask] = base + c;
        }
      }
    }
    // Update dp
    for (let mask = 0; mask < maxMask; mask++) {
      dp[mask] = nextDP[mask];
    }
  }

  return dp[maxMask - 1];

  function gcd(a, b) {
    while (b !== 0) {
      [a, b] = [b, a % b];
    }
    return a;
  }

  function lcm(a, b) {
    return (a / gcd(a, b)) * b;
  }
};

var nums = [1, 2, 3],
  target = [4];
var expected = 1;
var result = minimumIncrements(nums, target);
console.log(result, result === expected);

var nums = [8, 4],
  target = [10, 5];
var expected = 2;
var result = minimumIncrements(nums, target);
console.log(result, result === expected);

var nums = [7, 9, 10],
  target = [7];
var expected = 0;
var result = minimumIncrements(nums, target);
console.log(result, result === expected);
