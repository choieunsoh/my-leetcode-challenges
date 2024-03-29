// 1799. Maximize Score After N Operations
// https://leetcode.com/problems/maximize-score-after-n-operations/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxScore = function (nums) {
  const memoSize = 1 << nums.length;
  const gcds = preComputeGCDs(nums);
  const memo = new Array(memoSize).fill(-1);
  return backtracking(0, 0);

  function backtracking(mask, pairsPicked) {
    if (2 * pairsPicked === nums.length) return 0;
    if (memo[mask] !== -1) return memo[mask];

    let maxScore = 0;
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if ((mask >> i) & 1 || (mask >> j) & 1) continue;

        const newMask = mask | (1 << i) | (1 << j);
        const currScore = (pairsPicked + 1) * gcds[i][j];
        const remainingScore = backtracking(newMask, pairsPicked + 1);
        maxScore = Math.max(maxScore, currScore + remainingScore);
      }
    }
    memo[mask] = maxScore;
    return memo[mask];
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
    return b === 0 ? a : gcd(b, a % b);
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
