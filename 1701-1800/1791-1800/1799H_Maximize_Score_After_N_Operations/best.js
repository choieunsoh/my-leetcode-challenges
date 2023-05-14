// 1799. Maximize Score After N Operations
// https://leetcode.com/problems/maximize-score-after-n-operations/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxScore = function (nums) {
  const n = nums.length / 2;
  const gcds = preComputeGCDs(nums);
  const memo = new Map();
  return dp(1, (1 << (2 * n)) - 1);

  function dp(i, mask) {
    if (i > n) {
      return 0;
    }
    if (memo.has(mask)) {
      return memo.get(mask);
    }
    let score = 0;
    for (let j = 0; j < 2 * n; j++) {
      if ((mask & (1 << j)) !== 0) {
        for (let k = j + 1; k < 2 * n; k++) {
          if ((mask & (1 << k)) !== 0) {
            score = Math.max(score, i * gcds[j][k] + dp(i + 1, mask ^ (1 << j) ^ (1 << k)));
          }
        }
      }
    }
    memo.set(mask, score);
    return score;
  }

  function preComputeGCDs(nums) {
    const gcds = Array.from({ length: nums.length }, () => new Array(nums.length).fill(0));
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        const gcdVal = gcd(nums[i], nums[j]);
        gcds[i][j] = gcdVal;
        gcds[j][i] = gcdVal;
      }
    }
    return gcds;
  }

  function gcd(a, b) {
    if (a === 0) {
      return b;
    }
    return gcd(b % a, a);
  }
};

var nums = [1, 2];
var expected = 1;
var result = maxScore(nums);
console.log(result, result === expected);

var nums = [3, 4, 6, 8];
var expected = 11;
var result = maxScore(nums);
console.log(result, result === expected);

var nums = [1, 2, 3, 4, 5, 6];
var expected = 14;
var result = maxScore(nums);
console.log(result, result === expected);
