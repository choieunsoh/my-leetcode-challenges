// 1799. Maximize Score After N Operations
// https://leetcode.com/problems/maximize-score-after-n-operations/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxScore = function (nums) {
  const maxStates = 1 << nums.length; // 2^(nums array size)
  const finalMask = maxStates - 1;

  // 'dp[i]' stores max score we can get after picking remaining numbers represented by 'i'.
  const dp = new Array(maxStates).fill(0);

  // Iterate on all possible states one-by-one.
  for (let state = finalMask; state >= 0; state -= 1) {
    // If we have picked all numbers, we know we can't get more score as no number is remaining.
    if (state == finalMask) {
      dp[state] = 0;
      continue;
    }

    const numbersTaken = state.toString(2).split('1').length - 1;
    const pairsFormed = numbersTaken / 2;
    // States representing even numbers are taken are only valid.
    if (numbersTaken % 2) {
      continue;
    }

    // We have picked 'pairsFormed' pairs, we try all combinations of one more pair now.
    // We iterate on two numbers using two nested for loops.
    for (let firstIndex = 0; firstIndex < nums.length; firstIndex += 1) {
      for (let secondIndex = firstIndex + 1; secondIndex < nums.length; secondIndex += 1) {
        // We only choose those numbers which were not already picked.
        if (((state >> firstIndex) & 1) == 1 || ((state >> secondIndex) & 1) == 1) {
          continue;
        }
        const currentScore = (pairsFormed + 1) * gcd(nums[firstIndex], nums[secondIndex]);
        const stateAfterPickingCurrPair = state | (1 << firstIndex) | (1 << secondIndex);
        const remainingScore = dp[stateAfterPickingCurrPair];
        dp[state] = Math.max(dp[state], currentScore + remainingScore);
      }
    }
  }

  // Returning score we get from 'n' remaining numbers of array.
  return dp[0];
};

// Helper function to find the gcd of two numbers.
function gcd(a, b) {
  if (b == 0) {
    return a;
  }
  return gcd(b, a % b);
}

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
