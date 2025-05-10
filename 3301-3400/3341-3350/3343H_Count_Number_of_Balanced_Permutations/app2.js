// 3343. Count Number of Balanced Permutations
// https://leetcode.com/problems/count-number-of-balanced-permutations/description/
// T.C.: O(n^2)
// S.C.: O(n^2)
/**
 * @param {string} num
 * @return {number}
 */
var countBalancedPermutations = function (num) {
  const MOD = BigInt(1e9 + 7);
  let total = 0;
  const n = num.length;
  const counts = new Array(10).fill(0);
  for (const ch of num) {
    const digit = Number(ch);
    counts[digit]++;
    total += digit;
  }

  if (total % 2 !== 0) {
    return 0;
  }

  const target = total / 2;
  const maxOdd = Math.floor((n + 1) / 2);

  /* Pre-calculate combinations */
  const comb = new Array(maxOdd + 1);
  for (let i = 0; i <= maxOdd; i++) {
    comb[i] = new Array(maxOdd + 1).fill(0n);
    comb[i][i] = comb[i][0] = 1n;
    for (let j = 1; j < i; j++) {
      comb[i][j] = (comb[i - 1][j] + comb[i - 1][j - 1]) % MOD;
    }
  }

  const pSum = new Array(11).fill(0);
  for (let i = 9; i >= 0; i--) {
    pSum[i] = pSum[i + 1] + counts[i];
  }

  const memo = new Array(10);
  for (let i = 0; i < 10; i++) {
    memo[i] = new Array(target + 1);
    for (let j = 0; j <= target; j++) {
      memo[i][j] = new Array(maxOdd + 1).fill(-1n);
    }
  }
  return Number(dfs(0, 0, maxOdd));

  function dfs(pos, curr, oddCnt) {
    /* If the remaining positions cannot be legally filled, or if the sum of the elements at the current odd positions is greater than the target value */
    if (oddCnt < 0 || pSum[pos] < oddCnt || curr > target) {
      return 0n;
    }
    if (pos > 9) {
      return curr === target && oddCnt === 0 ? 1n : 0n;
    }
    if (memo[pos][curr][oddCnt] !== -1n) {
      return memo[pos][curr][oddCnt];
    }

    /* Even-numbered positions remaining to be filled */
    const evenCnt = pSum[pos] - oddCnt;
    let result = 0n;
    const start = Math.max(0, counts[pos] - evenCnt);
    const end = Math.min(counts[pos], oddCnt);
    for (let i = start; i <= end; i++) {
      /* The current digit is filled with i positions at odd positions, and cnt[pos] - i positions at even positions */
      const ways = (comb[oddCnt][i] * comb[evenCnt][counts[pos] - i]) % MOD;
      result = (result + ((ways * dfs(pos + 1, curr + i * pos, oddCnt - i)) % MOD)) % MOD;
    }
    memo[pos][curr][oddCnt] = result;
    return result;
  }
};

var num = '123';
var expected = 2;
var result = countBalancedPermutations(num);
console.log(result, result === expected);

var num = '112';
var expected = 1;
var result = countBalancedPermutations(num);
console.log(result, result === expected);

var num = '12345';
var expected = 0;
var result = countBalancedPermutations(num);
console.log(result, result === expected);
