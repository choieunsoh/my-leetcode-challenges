// 1140. Stone Game II
// https://leetcode.com/problems/stone-game-ii/
// T.C.: O(n^3)
// S.C.: O(n^2)
/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function (piles) {
  // Store the suffix sum of all array elements.
  const suffixSum = [...piles];
  for (let i = suffixSum.length - 2; i >= 0; i--) {
    suffixSum[i] += suffixSum[i + 1];
  }
  const memo = Array.from({ length: piles.length }, () => new Array(piles.length).fill(0));
  return maxStones(1, 0);

  function maxStones(maxTillNow, currIndex) {
    // If currIndex + 2*maxTillNow lies outside the array, pick all remaining stones.
    if (currIndex + 2 * maxTillNow >= suffixSum.length) {
      return suffixSum[currIndex];
    }
    if (memo[currIndex][maxTillNow] > 0) {
      return memo[currIndex][maxTillNow];
    }

    // Find the minimum value res for the next move possible.
    let result = Number.MAX_SAFE_INTEGER;
    for (let i = 1; i <= 2 * maxTillNow; i++) {
      const nextMaxStones = maxStones(Math.max(i, maxTillNow), currIndex + i);
      result = Math.min(result, nextMaxStones);
    }

    // Memoize the difference of suffixSum[p] and res. This denotes the maximum
    // stones that can be picked.
    memo[currIndex][maxTillNow] = suffixSum[currIndex] - result;
    return memo[currIndex][maxTillNow];
  }
};

var piles = [2, 7, 9, 4, 4];
var expected = 10;
var result = stoneGameII(piles);
console.log(result, result === expected);

var piles = [1, 2, 3, 4, 5, 100];
var expected = 104;
var result = stoneGameII(piles);
console.log(result, result === expected);
